class Statement {
  constructor() {
    this.transactions = []
  }
  // generate statement with headings
  print(...statement) {
    let title = 'date || credit || debit || balance'
    return title +'\n'+ statement
  }
}
module.exports = Statement