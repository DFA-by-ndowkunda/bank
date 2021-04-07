const os = require('os');
class Statement {
  constructor(transactions) {
    this.transactions = transactions
  }
  // generate statement with headings
  print() {
    let statement  = 'date || credit || debit || balance';
    for (let i = this.transactions.length -1;  i >=0;  i-- ){
       statement+=`${os.EOL}${this.transactions[i]}`
    }
       return statement
  }

}
module.exports = Statement