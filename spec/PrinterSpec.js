describe('Printer', () => {
  let printer;

  beforeEach(() => {
    printer = new Printer();
  });


  describe('#print', () => {
    it('can print a formatted statement', () => {
      const date = new Date();
      const transaction1 = {
        _date: date, _credit: 1000, _debit: null, _balance: 1000,
      };
      const transaction2 = {
        _date: date, _credit: 2000, _debit: null, _balance: 3000,
      };
      const transaction3 = {
        _date: date, _credit: null, _debit: 500, _balance: 2500,
      };
      const cashflows = [transaction1, transaction2, transaction3];
      expect(printer.print(cashflows)).toEqual('Statement!!!');
    });
  });
});
