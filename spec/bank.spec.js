const Bank = require('../src/bank.js')
describe('Bank methods', function () {
  
  it('Expecting printStatement() to show bank statement ', function () {
    //setup
    //execute
    let bank = new Bank()
    result = bank.printStatement()
    //verify
    expect(result).toEqual('date || credit || debit || balance\n14/01/2012 || || 500.00 || 2500.00 \n13/01/2012 || 2000.00 || || 3000.00 \n10/01/2012 || 1000.00 || || 1000.00');
});
});
