const Transaction = require('./src/transaction.js')  
class Bank {
  constructor(balance = 0) {
    this.balance = balance
    this.transactions = []
  } 
 
  deposit(date, transaction) {
    (this.balance += money).toFixed(2)
    transaction = new Transaction(activity, amount)
    if (this.activity == 'deposit') {
      this.transactions.push(`${date} || ${this.activity} || || ${(this.balance += this.amount).toFixed(2)}`)
    }
  }
     withdraw(date, transaction) {
        transaction = new Transaction(activity, amount)
        if (this.activity == 'withdraw') {
          this.transactions.push(`${date} || ${this.activity} || || ${(this.balance += this.amount).toFixed(2)}`)
    }
  }
      getTransactions() {
        return this.transactions
    }
  }

module.exports = Bank