/* eslint-disable @typescript-eslint/no-unused-vars */
import { MongoClient } from 'mongodb'

export const MongoHelper = {
  client: null as unknown as MongoClient,
  db: null as any,
  async connect (uri: string): Promise<void> {
    this.client = await MongoClient.connect(global.__MONGO_URI__, {
    })
    this.db = await this.client.db()
  },

  async disconnect () {
    await this.client.close()
  }
}
