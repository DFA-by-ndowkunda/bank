const Transaction = require('./transaction.js')

describe('Transaction tests', function () {

it('Expecting an amount to be deposited ', function () {
let deposit = new Transaction('deposit', 1000)
result = deposit.activity
expect(result).toEqual('deposit')
});
  
it('Expecting an amount to be deposited ', function () {
let deposit = new Transaction('deposit', 1000)
result = deposit.amount
expect(result).toEqual(1000)
});
})