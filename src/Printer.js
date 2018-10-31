/* eslint no-underscore-dangle: 0 */
function Printer() {}

Printer.prototype.printStatement = function printStatement(cashflows) {
  return 'date || credit || debit || balance';
};

Printer.prototype.headers = function headers() {
  return 'date || credit || debit || balance';
};

Printer.prototype.body = function body(cashflows) {
  let result = '';
  cashflows.forEach((cashflow) => {
    result = result.concat(`${cashflow._date} || ${cashflow._credit} || ${cashflow._debit} || ${cashflow._balance}`);
  });
  return result;
};
