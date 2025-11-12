/**
 * Rate limiting middleware for API endpoints
 * Prevents abuse and spam
 */

import { isRequestAborted, isAbortError } from '../utils/request-handler'

interface RateLimitStore {
  [key: string]: {
    count: number
    resetTime: number
  }
}

const rateLimitStore: RateLimitStore = {}
const RATE_LIMIT_WINDOW = 15 * 60 * 1000 // 15 minutes
const MAX_REQUESTS = 5 // Max 5 submissions per 15 minutes per IP

export default defineEventHandler(async (event) => {
  // Check if request was aborted (client disconnected)
  if (isRequestAborted(event)) {
    return // Silently return if request was cancelled
  }

  try {
    // Only apply rate limiting to POST /api/submissions
    if (event.node.req.url?.startsWith('/api/submissions') && event.node.req.method === 'POST') {
      // Get client IP
      const clientIP = getClientIP(event) || 'unknown'
      const now = Date.now()
      
      // Get or create rate limit entry
      const entry = rateLimitStore[clientIP]
      
      if (!entry || now > entry.resetTime) {
        // First request or window expired, create new entry
        rateLimitStore[clientIP] = {
          count: 1,
          resetTime: now + RATE_LIMIT_WINDOW
        }
        return // Allow request
      }
      
      // Increment count
      entry.count++
      
      if (entry.count > MAX_REQUESTS) {
        // Rate limit exceeded
        throw createError({
          statusCode: 429,
          statusMessage: 'Too many requests. Please try again later.'
        })
      }
    }
    
    // Clean up old entries periodically (every 100 requests)
    if (Object.keys(rateLimitStore).length > 100) {
      const now = Date.now()
      Object.keys(rateLimitStore).forEach(key => {
        if (now > rateLimitStore[key].resetTime) {
          delete rateLimitStore[key]
        }
      })
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

