import { MongoClient, Db } from 'mongodb'

let client: MongoClient | null = null
let db: Db | null = null

export async function connectToDatabase() {
  if (db) {
    return db
  }

  const uri = process.env.MONGODB_URI || 'mongodb://localhost:27017'
  const dbName = process.env.MONGODB_DB || 'hakborrel'

  if (!client) {
    client = new MongoClient(uri)
    await client.connect()
  }

  db = client.db(dbName)
  return db
}

export async function closeDatabase() {
  if (client) {
    await client.close()
    client = null
    db = null
  }
}

