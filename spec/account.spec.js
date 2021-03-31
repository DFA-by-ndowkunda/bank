const Account = require('../src/account.js')
describe('Account methods', function () {
  
  it('Expecting credit() to add money to current balance', function () {
    //setup
    //execute
    let account = new Account(1000)
    result = account.credit(500,'13/01/2012')
    //verify
    expect(result).toEqual('13/01/2012 || 500.00 || || 1500.00'); 
  });
    it('Expecting debit() to remove money from current balance', function () {
    //setup
    //execute
     let account = new Account(1000)
     result = account.debit(500,'14/01/2012')
    //verify
      expect(result).toEqual('14/01/2012 || || 500.00 || 500.00'); 
});
});
