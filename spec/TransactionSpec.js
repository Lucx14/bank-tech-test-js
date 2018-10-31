describe('Transaction', () => {
  let transaction;
  let transaction2;

  beforeEach(() => {
    transaction = new Transaction(balance = 500, credit = 1000, debit = null, date = 'today');
    transaction2 = new Transaction(balance = 2500, credit = null, debit = 400, date = 'today');
  });

  describe('#date', () => {
    it('can read the date attribute', () => {
      expect(transaction.getDate()).toEqual('today');
      expect(transaction2.getDate()).toEqual('today');
    });
  });

  describe('#credit', () => {
    it('can read the credit attribute', () => {
      expect(transaction.getCredit()).toEqual(1000);
      expect(transaction2.getCredit()).toEqual(null);
    });
  });

  describe('#debit', () => {
    it('can read the debit attribute', () => {
      expect(transaction.getDebit()).toEqual(null);
      expect(transaction2.getDebit()).toEqual(400);
    });
  });

  describe('#balance', () => {
    it('can read the balance attribute', () => {
      expect(transaction.getBalance()).toEqual(500);
      expect(transaction2.getBalance()).toEqual(2500);
    });
  });
});
