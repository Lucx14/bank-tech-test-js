function Account() {
    this.balance = 0;
    this.cashflows = [];
}

Account.prototype.deposit = function(amount) {
    this.balance += amount;
};