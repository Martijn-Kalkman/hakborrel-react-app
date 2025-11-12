/**
 * Authentication middleware for admin routes
 * Simple token-based authentication
 */

import { isRequestAborted, isAbortError } from '../utils/request-handler'

export default defineEventHandler(async (event) => {
  // Check if request was aborted (client disconnected)
  if (isRequestAborted(event)) {
    return // Silently return if request was cancelled
  }

  try {
    // Only protect /api/submissions GET endpoint (admin access)
    if (event.node.req.url?.startsWith('/api/submissions') && event.node.req.method === 'GET') {
      // Get token from Authorization header or query parameter
      const authHeader = getHeader(event, 'authorization')
      const token = authHeader?.replace('Bearer ', '') || getQuery(event).token as string
      
      // Get expected token from environment variable
      const expectedToken = process.env.ADMIN_TOKEN || process.env.NUXT_ADMIN_TOKEN
      
      if (!expectedToken) {
        // If no token is configured, allow access (for development)
        // In production, this should be required
        if (process.env.NODE_ENV === 'production') {
          throw createError({
            statusCode: 500,
            statusMessage: 'Admin authentication not configured'
          })
        }
        return // Allow access in development if no token configured
      }
      
      if (!token || token !== expectedToken) {
        throw createError({
          statusCode: 401,
          statusMessage: 'Unauthorized: Invalid or missing admin token'
        })
      }
    }
  } catch (error: any) {
    // Ignore aborted/premature close errors (expected when client disconnects)
    if (isAbortError(error) || isRequestAborted(event)) {
      return // Silently ignore
    }
    // Re-throw other errors
    throw error
  }
})

