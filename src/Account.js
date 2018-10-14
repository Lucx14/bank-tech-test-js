function Account() {
  this._balance = 0;
  this._cashflows = [];
}

Account.prototype.deposit = function(amount) {
  if(amount <= 0) {
    throw new Error("Error: amount must be positive")
  } else {
    this._balance += amount;
  }
  
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