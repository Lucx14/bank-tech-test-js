/* eslint no-underscore-dangle: 0 */
function Account(transaction = Transaction) {
  this._balance = 0;
  this._cashflows = [];
  this.transaction = transaction;
}

Account.prototype.deposit = function deposit(amount) {
  this._isNumber(amount);
  this._isPositive(amount);
  this._balance += amount;

  this._cashflows.push(new this.transaction(this._balance, amount, null));
};

Account.prototype.withdraw = function withdraw(amount) {
  this._isNumber(amount);
  this._isPositive(amount);
  this._insufficientFunds(amount);
  this._balance -= amount;

  this._cashflows.push(new this.transaction(this._balance, null, amount));
};

Account.prototype.statement = function statement() {
  return 'statement';
};

Account.prototype.currentBalance = function currentBalance() {
  return this._balance;
};


Account.prototype._isPositive = function _isPositive(amount) {
  if (amount <= 0) throw new Error('Error: amount must be positive');
};

Account.prototype._isNumber = function _isNumber(amount) {
  if (isNaN(amount)) { throw new Error('Error: amount must be a number'); }
};

Account.prototype._insufficientFunds = function _insufficientFunds(amount) {
  if (amount > this.currentBalance()) throw new Error('Error: not enough money in account');
};
