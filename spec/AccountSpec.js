describe('Account', () => {
    let account;

    beforeEach(function() {
        account = new Account();
    });

    it('a user can make a deposit', () => {
        account.deposit(1000);
        expect(account.balance).toEqual(1000);
    });
});