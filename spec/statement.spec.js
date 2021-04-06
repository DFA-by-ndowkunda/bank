const Statement = require('../src/statement.js');
const Transaction = require('../src/transaction.js');
const Bank = require('../src/bank.js');

xdescribe('Feature test', function () {
  it('Expecting print() to display tranactions in a statement', function () {
    //setup
    //execute
    let statement = new Statement()
    let bank = new Bank()
    let result = statement.print(bank.getTransactions())
    //verify
    expect(result).toEqual('date || credit || debit || balance\n14/01/2012 || || 500.00 || 2500.00\n13/01/2012 || 2000.00 || || 3000.00\n10/01/2012 || 1000.00 || || 1000.00');
});
});
