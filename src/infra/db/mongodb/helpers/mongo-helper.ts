/* eslint-disable @typescript-eslint/no-unused-vars */
import { Collection, MongoClient } from 'mongodb'
import { AccountModel } from '../../../../domain/models/account'

export const MongoHelper = {
  client: null as unknown as MongoClient,
  db: null as any,
  uri: null as unknown as string,

  async connect (uri: string): Promise<void> {
    this.uri = uri
    if (!process.env.MONGO_URL) {
      throw new Error('MONGO_URL is not defined')
    }
    this.client = await MongoClient.connect(uri, {
    })
    this.db = await this.client.db()
  },

  async disconnect () {
    await this.client.close()
    this.client = null
  },

  async getCollection (name: string): Promise<Collection> {
    if (!this.client?.topology?.isConnected()) {
      await this.connect(this.uri)
    }
    return this.db.collection(name)
  },

  map: (collection: any): any => {
    const { _id, ...collectionWithoutId } = collection
    return Object.assign({}, collectionWithoutId, { id: _id })
  }
}
