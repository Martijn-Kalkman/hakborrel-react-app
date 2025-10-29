import mongoose, { Connection } from 'mongoose'

let connection: Connection | null = null

// Configure Mongoose settings
mongoose.set('strictQuery', false)

export async function connectToDatabase(): Promise<Connection> {
  // If connection exists and is ready, return it
  if (connection && connection.readyState === 1) {
    return connection
  }

  const uri = process.env.MONGODB_URI || 'mongodb://localhost:27017'
  const dbName = process.env.MONGODB_DB || 'hakborrel'

  // Build connection string - always use hakborrel database
  // MongoDB URI format: mongodb://[username:password@]host[:port][/database][?options]
  // or: mongodb+srv://[username:password@]host[/database][?options]
  
  let connectionString = uri
  
  // Validate URI starts with mongodb:// or mongodb+srv://
  if (!uri.startsWith('mongodb://') && !uri.startsWith('mongodb+srv://')) {
    throw new Error(`Invalid MongoDB URI: must start with mongodb:// or mongodb+srv://, got: ${uri}`)
  }
  
  // Separate query parameters from the rest
  const queryIndex = uri.indexOf('?')
  const queryString = queryIndex !== -1 ? uri.substring(queryIndex) : ''
  const uriWithoutQuery = queryIndex !== -1 ? uri.substring(0, queryIndex) : uri
  
  // Find the database name part (after the last / that's not part of mongodb:// or mongodb+srv://)
  // For mongodb://, skip the // part (positions 0-9)
  // For mongodb+srv://, skip the // part (positions 0-12)
  const protocolEnd = uriWithoutQuery.indexOf('://') + 3
  const afterProtocol = uriWithoutQuery.substring(protocolEnd)
  
  // Find the first / after the protocol (this separates host:port from /database)
  const dbSlashIndex = afterProtocol.indexOf('/')
  
  if (dbSlashIndex === -1) {
    // No database name specified, append it
    connectionString = `${uriWithoutQuery}/${dbName}${queryString}`
  } else {
    // Replace the existing database name (everything after the /)
    const hostPortPart = uriWithoutQuery.substring(0, protocolEnd + dbSlashIndex)
    connectionString = `${hostPortPart}/${dbName}${queryString}`
  }
  
  // Additional validation: ensure we're not using "hakborrel" as a hostname
  // (common mistake when MONGODB_URI is set incorrectly)
  const hostPart = connectionString.match(/(?:mongodb\+?srv?:\/\/[^@]+\@)?([^\/\?:]+)/)?.[1]
  if (hostPart === dbName || hostPart?.toLowerCase().includes('hakborrel')) {
    const errorMsg = `❌ ERROR: Detected "${hostPart}" as hostname, but it should be a database name, not a server hostname.\n` +
      `   Current MONGODB_URI: ${uri}\n` +
      `   Fix: Set MONGODB_URI to your MongoDB server (e.g., mongodb://localhost:27017)\n` +
      `   And set MONGODB_DB=${dbName} separately\n` +
      `   Example .env file:\n` +
      `   MONGODB_URI=mongodb://localhost:27017\n` +
      `   MONGODB_DB=${dbName}`
    console.error(errorMsg)
    throw new Error(`Invalid MongoDB URI configuration: "${hostPart}" is being used as hostname. Use a valid MongoDB server address instead.`)
  }
  
  console.log(`📝 Parsed MongoDB connection: ${connectionString.replace(/\/\/[^:]+:[^@]+@/, '//***:***@').replace(/\/[^\/\?]+/, '/' + dbName)}`) // Show final connection string with hidden credentials

  // Connection options (forwarded to MongoDB driver)
  const options = {
    maxPoolSize: 10, // Maintain up to 10 socket connections
    minPoolSize: 2, // Maintain at least 2 socket connections
    serverSelectionTimeoutMS: 5000, // Keep trying to send operations for 5 seconds
    socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity
    family: 4 // Use IPv4, skip trying IPv6
  }

  try {
    // If no connection exists or connection is closed, create a new one
    if (!connection || connection.readyState === 0) {
      console.log(`Connecting to MongoDB: ${connectionString.replace(/\/\/[^:]+:[^@]+@/, '//***:***@')}`) // Hide credentials in logs
      await mongoose.connect(connectionString, options)
      
      connection = mongoose.connection

      // Set up connection event listeners
      connection.on('error', (err) => {
        console.error('MongoDB connection error:', err)
      })

      connection.on('disconnected', () => {
        console.warn('MongoDB disconnected')
        connection = null
      })

      connection.on('reconnected', () => {
        console.log('MongoDB reconnected')
      })

      console.log(`MongoDB connected successfully to database: ${connection.db?.databaseName || dbName}`)
    }
  } catch (error: any) {
    const errorMessage = error.message || 'Unknown error'
    
    // Provide helpful error messages for common issues
    if (errorMessage.includes('ENOTFOUND')) {
      const hostname = errorMessage.match(/ENOTFOUND ([^\s]+)/)?.[1]
      console.error(`❌ MongoDB connection failed: Cannot resolve hostname "${hostname}"`)
      console.error(`   Make sure MONGODB_URI points to a valid MongoDB server:`)
      console.error(`   - Local: mongodb://localhost:27017`)
      console.error(`   - Remote: mongodb://your-server-ip:27017`)
      console.error(`   - Atlas: mongodb+srv://username:password@cluster.mongodb.net`)
      console.error(`   Current MONGODB_URI: ${uri}`)
    } else {
      console.error(`❌ Failed to connect to MongoDB: ${errorMessage}`)
    }
    throw error
  }

  return connection
}

export async function closeDatabase(): Promise<void> {
  if (connection && connection.readyState !== 0) {
    await mongoose.connection.close()
    connection = null
    console.log('MongoDB connection closed')
  }
}

// Helper to check if database is connected
export function isConnected(): boolean {
  return connection !== null && connection.readyState === 1
}

