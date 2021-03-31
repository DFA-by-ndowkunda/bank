class Account {
  constructor(balance =  0) {
    this.balance = balance
  }
 
  credit(cash, date) {
    let num = cash.toFixed(2)
    let totalBalance = (this.balance += cash).toFixed(2)
    return `${date} || ${num} || || ${totalBalance}`
  }

  debit(cash, date) {
    let num = cash.toFixed(2)
    let totalBalance = (this.balance -= cash).toFixed(2)
    return `${date} || || ${num} || ${totalBalance}`
  }
  
}
module.exports =Account