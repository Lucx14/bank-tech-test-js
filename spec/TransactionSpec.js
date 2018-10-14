describe('Transaction', () => {
  let transaction;

  beforeEach(function () {
    transaction = new Transaction(500, 1000);
  });

  describe('#date', () => {
    it('can read the date attribute', () => {
      expect(transaction.getDate()).toEqual("14/10/2018");
    });
  });

  describe('#credit', () => {
    it('can read the credit attribute', () => {
      expect(transaction.getCredit()).toEqual(null);
    });
  });

  describe('#debit', () => {
    it('can read the debit attribute', () => {
      expect(transaction.getDebit()).toEqual(null);
    });
  });

  describe('#balance', () => {
    it('can read the balance attribute', () => {
      expect(transaction.getBalance()).toEqual(500);
    });
  });
});
