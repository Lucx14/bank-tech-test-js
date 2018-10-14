describe('Account', () => {
  let account;

  beforeEach(function() {
    account = new Account();
  });



  describe('#deposit', () => {
    it('a user can make a deposit', () => {
      account.deposit(1000);
      expect(account.currentBalance()).toEqual(1000);
    });
  });


  describe('#withdraw', () => {
    it('a user can make a withdrawal', () => {
      account.deposit(1000);
      account.withdraw(500);
      expect(account.currentBalance()).toEqual(500);
      
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