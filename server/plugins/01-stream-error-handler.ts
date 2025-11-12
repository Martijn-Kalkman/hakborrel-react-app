/**
 * Stream error handler plugin
 * Properly handles request/response stream errors to prevent "Premature close" errors
 * This plugin runs early to catch stream errors before they propagate
 */

export default defineNitroPlugin((nitroApp) => {
  // Hook into request events to handle stream errors
  nitroApp.hooks.hook('request', (event) => {
    const req = event.node?.req
    const res = event.node?.res
    
    if (!req || !res) return
    
    // Handle request errors (client disconnects)
    req.on('error', (err: any) => {
      // Only handle specific connection errors, let others propagate
      if (err.code === 'ECONNRESET' || 
          err.code === 'ECONNABORTED' || 
          err.code === 'EPIPE' ||
          err.message?.includes('aborted') ||
          err.message?.includes('ECONNRESET')) {
        // Silently handle - client disconnected, nothing to do
        return
      }
      // For other errors, let them propagate normally
    })
    
    // Handle response errors (writing to closed stream)
    res.on('error', (err: any) => {
      // Only handle specific stream errors, let others propagate
      if (err.code === 'ERR_STREAM_WRITE_AFTER_END' ||
          err.code === 'ECONNRESET' ||
          err.code === 'EPIPE' ||
          err.message?.includes('write after end') ||
          err.message?.includes('destroyed') ||
          err.message?.includes('premature close')) {
        // Silently handle - connection closed, nothing to write
        return
      }
      // For other errors, let them propagate normally
    })
    
    // Handle request close (client disconnected)
    req.on('close', () => {
      // Request closed - mark response as finished if not already
      if (!res.writableEnded && !res.destroyed) {
        try {
          res.destroy()
        } catch {
          // Ignore errors when destroying already closed stream
        }
      }
    })
    
    // Prevent writing to closed response
    const originalWrite = res.write.bind(res)
    const originalEnd = res.end.bind(res)
    
    res.write = function(chunk: any, encoding?: any, callback?: any) {
      if (res.destroyed || res.writableEnded) {
        if (callback) callback()
        return false
      }
      try {
        return originalWrite(chunk, encoding, callback)
      } catch (err: any) {
        if (err.code === 'ERR_STREAM_WRITE_AFTER_END' ||
            err.code === 'EPIPE' ||
            err.message?.includes('write after end')) {
          if (callback) callback()
          return false
        }
        throw err
      }
    }
    
    res.end = function(chunk?: any, encoding?: any, callback?: any) {
      if (res.destroyed || res.writableEnded) {
        if (callback) callback()
        return res
      }
      try {
        return originalEnd(chunk, encoding, callback)
      } catch (err: any) {
        if (err.code === 'ERR_STREAM_WRITE_AFTER_END' ||
            err.code === 'EPIPE' ||
            err.message?.includes('write after end')) {
          if (callback) callback()
          return res
        }
        throw err
      }
    }
  })
  
  // Hook into error events to prevent logging of expected connection errors
  nitroApp.hooks.hook('error', (error: any, { event }: any) => {
    // Check if this is a connection/stream error that we should handle silently
    if (error?.code === 'ECONNRESET' ||
        error?.code === 'ECONNABORTED' ||
        error?.code === 'EPIPE' ||
        error?.code === 'ERR_STREAM_WRITE_AFTER_END' ||
        error?.message?.includes('aborted') ||
        error?.message?.includes('Premature close') ||
        error?.message?.includes('write after end') ||
        error?.message?.includes('destroyed') ||
        error?.message?.includes('end-of-stream')) {
      // Check if request was aborted
      if (event?.node?.req?.aborted || event?.node?.req?.destroyed) {
        return false // Prevent error from being logged
      }
    }
    
    // Allow other errors to be handled normally
    return true
  })
})

