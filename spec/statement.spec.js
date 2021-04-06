const Statement = require('../src/statement.js');
const Transaction = require('../src/transaction.js');
const Account = require('../src/Account.js');

describe('Feature test', function () {
  it('Expecting print() to display tranactions in a statement', function () {
    //setup
    let account = new Account(0)
    let deposit1 = new Transaction('10/01/2012', 'deposit', 1000)
    let deposit2 = new Transaction('13/01/2012', 'deposit', 2000)
    let withdrawal1 = new Transaction('14/01/2012', 'withdraw', 500)
    //execute
    account.storeTransaction(deposit1)
    account.storeTransaction(deposit2)
    account.storeTransaction(withdrawal1)
    let statement = new Statement(account.transactions)
    let result = statement.print()
    //verify
    expect(result).toEqual('date || credit || debit || balance\n14/01/2012 ||  || 500.00 || 2500.00\n13/01/2012 || 2000.00 || || 3000.00\n10/01/2012 || 1000.00 || || 1000.00 ');
});
});
