/* eslint no-underscore-dangle: 0 */
function Printer() {}


Printer.prototype.printStatement = function printStatement(cashflows) {
  let result = 'date || credit || debit || balance';
  cashflows.reverse().forEach((cashflow) => {
    result = result.concat('\n', `${cashflow._date} || ${cashflow._credit} || ${cashflow._debit} || ${cashflow._balance}`);
  });
  return result;
};
