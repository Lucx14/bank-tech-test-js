function Account() {
  this._balance = 0;
  this._cashflows = [];
}

Account.prototype.deposit = function(amount) {
  this._isNumber(amount);
  this._isPositive(amount);
  this._balance += amount;
};

Account.prototype.withdraw = function(amount) {
  this._balance -= amount;
};

Account.prototype.statement = function() {
  return 'statement';
};

Account.prototype.currentBalance = function() {
  return this._balance;
};

Account.prototype._isPositive = function(amount) {
  if (amount <= 0) throw new Error("Error: amount must be positive");
};

Account.prototype._isNumber = function(amount) {
  if (isNaN(amount)) throw new Error("Error: amount must be a number");
}