const Account = require('../src/account.js')
describe('Account methods', function () {
  
  it('Expecting credit() to add money to current balance', function () {
    //setup
    //execute
    let account = new Account(1000)
    result = account.credit(500)
    //verify
    expect(result).toEqual(1500);
  });
    it('Expecting debit() to remove money to current balance', function () {
    //setup
    //execute
     let account = new Account(1000)
     result = account.debit(500)
    //verify
     expect(result).toEqual(500); 
});
});
