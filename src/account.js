class Account {
  constructor(balance = 0) {
    this.balance = balance
    this.transactions = []
  }

  storeTransaction(transaction) {
    if (transaction.activity == 'deposit') {
      let newBalance = this.balance += transaction.amount
      this.transactions.push(`${transaction.date} || ${transaction.amount.toFixed(2)} || || ${newBalance.toFixed(2)}`)
    }
    if (transaction.activity == 'withdraw') {
      let newBalance = this.balance -= transaction.amount
      this.transactions.push(`${transaction.date} || || ${transaction.amount.toFixed(2)} || ${newBalance.toFixed(2)}`)
    }
    return this.transactions
  }
}
module.exports = Account