const Account = require('../src/account.js')
const Transaction = require('../src/transaction.js')

describe('Account tests', function () {
  it('Expecting account to store transaction', function () {
    let transaction = new Transaction('14/01/2012','deposit',1000)
    let account = new Account(0)
    account.storeTransaction(transaction)
    expect(account.transactions).toEqual(['14/01/2012 || 1000.00 || || 1000.00'])
})
    it('Expecting account to store transaction', function () {
    let transaction = new Transaction('14/01/2012','withdraw',1000)
      let account = new Account(1000)
    account.storeTransaction(transaction)
    expect(account.transactions).toEqual(['14/01/2012 || || 1000.00 || 0.00'])
    })
      it('Expecting account to store multiple transactions', function () {
        let transaction1 = new Transaction('14/01/2012', 'withdraw', 1000)
        let transaction2 = new Transaction('13/01/2012','withdraw',1000)
      let account = new Account(2000)
        account.storeTransaction(transaction1)
        account.storeTransaction(transaction2)
    expect(account.transactions).toEqual(['14/01/2012 || || 1000.00 || 1000.00',
  '13/01/2012 || || 1000.00 || 0.00'])
})

})