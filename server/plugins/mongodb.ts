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

  // Error suppression is now handled in server/plugins/error-handler.ts
  // This keeps the MongoDB plugin focused on connection management

  // Gracefully close connection on server shutdown
  nitroApp.hooks.hook('close', async () => {
    const { closeDatabase } = await import('../utils/db')
    await closeDatabase()
  })
})

