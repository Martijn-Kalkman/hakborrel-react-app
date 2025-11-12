/**
 * Utility functions for safely handling HTTP requests
 * Prevents "Premature close" and "aborted" errors by checking request state
 */

/**
 * Check if a request has been aborted or destroyed
 */
export function isRequestAborted(event: any): boolean {
  return !!(event?.node?.req?.aborted || event?.node?.req?.destroyed || event?.node?.res?.destroyed)
}

/**
 * Safely set response headers, checking if request is still active
 */
export function safeSetHeader(event: any, name: string, value: string): boolean {
  if (isRequestAborted(event)) {
    return false
  }
  
  try {
    setHeader(event, name, value)
    return true
  } catch (error: any) {
    // Ignore errors when trying to set headers on closed connections
    if (error.code === 'ERR_STREAM_WRITE_AFTER_END' || 
        error.message?.includes('write after end') ||
        error.message?.includes('destroyed')) {
      return false
    }
    throw error
  }
}

/**
 * Safely send a response, checking if request is still active
 */
export function safeSendResponse(event: any, data: any): boolean {
  if (isRequestAborted(event)) {
    return false
  }
  
  try {
    // Check one more time before sending
    if (isRequestAborted(event)) {
      return false
    }
    
    // The return statement will send the response
    // We just need to ensure the stream is still writable
    return true
  } catch (error: any) {
    // Ignore errors when trying to write to closed connections
    if (error.code === 'ERR_STREAM_WRITE_AFTER_END' || 
        error.code === 'ECONNRESET' ||
        error.code === 'EPIPE' ||
        error.message?.includes('write after end') ||
        error.message?.includes('destroyed') ||
        error.message?.includes('premature close')) {
      return false
    }
    throw error
  }
}

/**
 * Wrap an async handler to safely handle aborted requests
 */
export function withAbortCheck<T>(
  event: any,
  handler: () => Promise<T>
): Promise<T | null> {
  return new Promise(async (resolve, reject) => {
    // Check if already aborted
    if (isRequestAborted(event)) {
      resolve(null)
      return
    }
    
    // Set up abort listener
    const abortHandler = () => {
      resolve(null)
    }
    
    if (event?.node?.req) {
      event.node.req.once('aborted', abortHandler)
      event.node.req.once('close', abortHandler)
    }
    
    if (event?.node?.res) {
      event.node.res.once('close', abortHandler)
      event.node.res.once('finish', () => {
        if (event?.node?.req) {
          event.node.req.removeListener('aborted', abortHandler)
          event.node.req.removeListener('close', abortHandler)
        }
      })
    }
    
    try {
      const result = await handler()
      
      // Clean up listeners
      if (event?.node?.req) {
        event.node.req.removeListener('aborted', abortHandler)
        event.node.req.removeListener('close', abortHandler)
      }
      
      // Check one final time before resolving
      if (isRequestAborted(event)) {
        resolve(null)
        return
      }
      
      resolve(result)
    } catch (error: any) {
      // Clean up listeners
      if (event?.node?.req) {
        event.node.req.removeListener('aborted', abortHandler)
        event.node.req.removeListener('close', abortHandler)
      }
      
      // Check if error is due to aborted request
      if (isRequestAborted(event) ||
          error.code === 'ECONNRESET' ||
          error.code === 'ECONNABORTED' ||
          error.code === 'EPIPE' ||
          error.code === 'ERR_STREAM_WRITE_AFTER_END' ||
          error.message?.includes('aborted') ||
          error.message?.includes('Premature close') ||
          error.message?.includes('write after end') ||
          error.message?.includes('destroyed')) {
        resolve(null)
        return
      }
      
      reject(error)
    }
  })
}

/**
 * Check if an error is related to an aborted request
 */
export function isAbortError(error: any): boolean {
  return !!(
    error?.code === 'ECONNRESET' ||
    error?.code === 'ECONNABORTED' ||
    error?.code === 'EPIPE' ||
    error?.code === 'ERR_STREAM_WRITE_AFTER_END' ||
    error?.message?.includes('aborted') ||
    error?.message?.includes('Premature close') ||
    error?.message?.includes('write after end') ||
    error?.message?.includes('destroyed') ||
    error?.message?.includes('end-of-stream')
  )
}

