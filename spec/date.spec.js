const Date = require('../src/date.js')
describe('Date tests', function () {
  
  it('Expecting a date to be printed', function () {
    //setup
    //execute
    let date = new Date('13/01/2012')
    result = date
    //verify
    expect(result).toEqual('13/01/2012'); 
  });
    
});