/* eslint no-underscore-dangle: 0 */
function Transaction(balance, credit, debit, date = new Date().toLocaleDateString()) {
  this._date = date;
  this._credit = credit;
  this._debit = debit;
  this._balance = balance;
}

Transaction.prototype.getDate = function getDate() {
  return this._date;
};

Transaction.prototype.getCredit = function getCredit() {
  return this._credit;
};

Transaction.prototype.getDebit = function getDebit() {
  return this._debit;
};

Transaction.prototype.getBalance = function getBalance() {
  return this._balance;
};
