class Account {
  constructor(balance =  0) {
  this.balance = balance
  }
  credit(cash) {
    return this.balance += cash
  }

  debit(cash) {
    return this.balance -= cash
  }
}
module.exports =Account