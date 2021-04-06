const Account = require("./Account")

class Transaction {
  constructor(date, activity = new Account(), amount) {
  this.date = date
  this.activity = activity
  this.amount = amount
  }
}
module.exports = Transaction