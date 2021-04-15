const Transaction = require('../src/transaction.js')

describe('Transaction tests', function () {

it('Expecting a deposit transaction', function () {
let deposit1 = new Transaction('14/01/2012','deposit', 1000)
result = deposit1.activity
expect(result).toEqual('deposit')
});
  
it('Expecting an amount to be deposited ', function () {
let deposit2 = new Transaction('14/01/2012','deposit', 1000)
result = deposit2.amount
expect(result).toEqual(1000)
});
it('Expecting an amount to be deposited on a certain date', function () {
let deposit3 = new Transaction('14/01/2012','deposit', 1000)
result = deposit3.date
expect(result).toEqual('14/01/2012')
});
})