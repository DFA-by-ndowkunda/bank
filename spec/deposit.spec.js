const Deposit = require('../src/deposit.js')
describe('Deposit tests', function () {
  
  it('Expecting credit() to add money to current balance', function () {
    //setup
    //execute
    let balance = new Deposit(0)
    result = balance.credit(500)
    //verify
    expect(result).toEqual('|| 500.00 || || 500.00'); 
  });
    
});