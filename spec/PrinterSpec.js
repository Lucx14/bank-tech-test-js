describe('Printer', () => {
  let printer;

  beforeEach(() => {
    printer = new Printer();
  });


  describe('#printStatement', () => {
    it('can print a formatted statement', () => {
      const date = new Date().toLocaleDateString();
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
      expect(printer.printStatement(cashflows)).toEqual('date || credit || debit || balance\n01/11/2018 || null || 500 || 2500\n01/11/2018 || 2000 || null || 3000\n01/11/2018 || 1000 || null || 1000');
    });
  });
});
