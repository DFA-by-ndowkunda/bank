const Bank = require('./bank.js')
const Transaction = require('./transaction.js')

describe('Bank tests', function () {
it('Expecting bank balance to be updated', function () {
let bank = new Bank()
let transaction = new Transaction('deposit',1000)
bank.deposit('14/01/2012', transaction)
let result = bank.getBalance()
expect(result).toEqual(1000)
})
  
it('Expecting bank balance to be updated', function () {
let bank = new Bank(0)
let transaction = new Transaction('withdraw', 500)
bank.withdraw('13/01/2012', transaction)
let result = bank.getBalance()
expect(result).toEqual(500)
})

it('Expecting transactions to be stored in array', function () {
let bank = new Bank(500)
let transaction = new Transaction('withdraw', 500)
let transaction2 = new Transaction('deposit',1000)
bank.withdraw('13/01/2012', transaction)
bank.deposit('12/02/2012',transaction2)
let result = bank.getTransactions()
expect(result).toEqual([13/01/2012 ||  || 500.00 || 0.00],[12/01/2012 ||1000.00 || || 500.00])

})

})