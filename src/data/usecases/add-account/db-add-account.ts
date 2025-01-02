import { AddAccount, AddAccountModel, AccountModel, Encrypter } from './db-add-accounts-protocols'

export class DbAddAccount implements AddAccount {
  private readonly encrypter: Encrypter

  constructor (encrypter: Encrypter) {
    this.encrypter = encrypter
  }

  async add (account: AddAccountModel): Promise<AccountModel> {
    await this.encrypter.encrypt(account.password)
    const fakeAccount: AccountModel = {
      id: 'valid_id',
      name: account.name,
      email: account.email,
      password: 'hashed_password'
    }
    return await new Promise(resolve => resolve(fakeAccount))
  }
}
