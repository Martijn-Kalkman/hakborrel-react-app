import { connectToDatabase } from '../utils/db'

/**
 * Server plugin to initialize MongoDB connection on Nuxt server startup
 * This ensures the database is connected before any API routes are handled
 */
export default defineNitroPlugin(async (nitroApp) => {
  try {
    await connectToDatabase()
    console.log('✅ MongoDB connection initialized via server plugin')
  } catch (error: any) {
    console.error('❌ Failed to initialize MongoDB connection:', error.message)
    // Don't throw - allow server to start, connection will be retried on API calls
  }

  // Suppress expected "aborted" and "premature close" errors in logs
  // These errors occur when clients disconnect during requests (normal behavior)
  const originalConsoleError = console.error
  console.error = (...args: any[]) => {
    const message = args[0]?.toString() || ''
    
    // Check if this is a "Premature close" or "aborted" error
    if (typeof message === 'string' && (
        message.includes('Premature close') ||
        message.includes('Fetch handler error: Premature close') ||
        message.includes('aborted') ||
        message.includes('ECONNRESET') ||
        message.includes('onclose')
      )) {
      // Suppress these expected errors - don't log them
      return
    }
    
    // For all other errors, call the original console.error
    originalConsoleError.apply(console, args)
  }

  // Gracefully close connection on server shutdown
  nitroApp.hooks.hook('close', async () => {
    const { closeDatabase } = await import('../utils/db')
    await closeDatabase()
  })
})

