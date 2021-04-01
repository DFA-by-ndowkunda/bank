const Withdrawal = require('../src/withdrawal.js')
describe('Withdrawal tests', function () {
  
  it('Expecting debit() to remove money to current balance', function () {
    //setup
    //execute
    let balance = new Withdrawal(0)
    result = balance.debit(500)
    //verify
    expect(result).toEqual('|| 500.00 || || -500.00'); 
  });
});