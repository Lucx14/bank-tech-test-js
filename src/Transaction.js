/* eslint no-underscore-dangle: 0 */
function Transaction(balance, cashValue) {
  this._date = '14/10/2018';
  this._credit = null;
  this._debit = null;
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

Transaction.prototype.creditDebit = function creditDebit(cashValue) {
  if (cashValue > 0) {
    this._credit = cashValue;
  } else {
    this._debit = cashValue * (-1);
  }
};
