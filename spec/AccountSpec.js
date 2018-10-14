describe('Account', () => {
  let account;

  beforeEach(function() {
    function mockTransaction() {}
    account = new Account(mockTransaction);
  });



  describe('#deposit', () => {
    it('a user can make a deposit', () => {
      account.deposit(1000);
      expect(account.currentBalance()).toEqual(1000);
    });
    it('only accepts positive numbers', () => {
      expect (() => {
        account.deposit(-10)
      }).toThrowError('Error: amount must be positive')
    });
    it('only accepts numbers', () => {
      expect (() => {
        account.deposit("one hundred pounds")
      }).toThrowError('Error: amount must be a number')
    });
    it('adds a transaction object to the cashflows array', () => {
      account.deposit(1000);
      expect(account._cashflows.length).toEqual(1);
    });
  });


  describe('#withdraw', () => {
    it('a user can make a withdrawal', () => {
      account.deposit(1000);
      account.withdraw(500);
      expect(account.currentBalance()).toEqual(500);
    });
    it('only accepts numbers', () => {
      expect (() => {
        account.withdraw("one hundred pounds")
      }).toThrowError('Error: amount must be a number')
    });
    it('only accepts positive numbers', () => {
      expect (() => {
        account.withdraw(-10)
      }).toThrowError('Error: amount must be positive')
    });
    it('will not allow withdrawals larger than the current balance', () => {
      account.deposit(1000);
      expect (() => {
        account.withdraw(1001)
      }).toThrowError('Error: not enough money in account')
    });
    it('adds a transaction object to the cashflows array', () => {
      account.deposit(1000);
      account.withdraw(500);
      expect(account._cashflows.length).toEqual(2);
    });
  });


  describe('#statement', () => {
    it('a user can request a printed statement', () => {
      expect(account.statement()).toEqual('statement');
    });
  });

  describe('#currentBalance', () => {
    it('a user can check the balance on the account', () => {
      expect(account.currentBalance()).toEqual(0);
    });
  });


});