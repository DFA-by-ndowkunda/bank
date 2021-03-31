const Account = require('../src/account.js')
const Bank = require('../src/bank.js')
describe('Bank methods', function () {
  
  it('Expecting print() to show each account statement ', function () {
    //setup
    //execute
    let account = new Account(0)
    let bank = new Bank()
    let statement3 = account.credit(1000,'10/01/2012')
    let statement2 = account.credit(2000, '13/01/2012')
    let statement1 = account.debit(500, '14/01/2012')
    let result = bank.print(`${statement1}\n${statement2}\n${statement3}`)
    //verify
    expect(result).toEqual('date || credit || debit || balance\n14/01/2012 || || 500.00 || 2500.00\n13/01/2012 || 2000.00 || || 3000.00\n10/01/2012 || 1000.00 || || 1000.00');
});
});
