/* eslint-disable @typescript-eslint/no-unused-vars */
import { Collection, MongoClient } from 'mongodb'

export const MongoHelper = {
  client: null as unknown as MongoClient,
  db: null as any,
  async connect (uri: string): Promise<void> {
    if (!process.env.MONGO_URL) {
      throw new Error('MONGO_URL is not defined')
    }
    this.client = await MongoClient.connect(process.env.MONGO_URL, {
    })
    this.db = await this.client.db()
  },

  async disconnect () {
    await this.client.close()
  },

  getCollection (name: string): Collection {
    return this.db.collection(name)
  }
}
