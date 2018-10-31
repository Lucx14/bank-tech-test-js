# Bank Tech Test

A simple program to model a users bank account. The program will allow a user to make deposits, make withdrawals and also print out a bank statement that will display the account history. The task requirements are shown below. Although not mentioned in the task requirements im going to introduce simple common sense edge cases such as not allowing withdrawals from an empty account. The program will be written in Javascript using Jasmine as a testing framework, usage instructions below.

### Requirements

* You should be able to interact with your code via a REPL like IRB or the JavaScript console.  (You don't need to implement a command line interface that takes input from STDIN.)
* Deposits, withdrawal.
* Account statement (date, amount, balance) printing.
* Data can be kept in memory (it doesn't need to be stored to a database or anything).

### Acceptance criteria

**Given** a client makes a deposit of 1000 on 10-01-2012  
**And** a deposit of 2000 on 13-01-2012  
**And** a withdrawal of 500 on 14-01-2012  
**When** she prints her bank statement  
**Then** she would see

```
date || credit || debit || balance
14/01/2012 || || 500.00 || 2500.00
13/01/2012 || 2000.00 || || 3000.00
10/01/2012 || 1000.00 || || 1000.00
```


### Approach

after reading the specifications I picture a single object which I will call 'account'. My initial thoughts are to take the acceptance criteria and translate them into a basic set of feature tests that i would set up and run in the Javascript console. So my user interaction/feature tests in the console would look something like the below.

# User interaction

Account object instantiates with a zero balance
var account = new Account
account.deposit(1000);
account.currentBalance();
account.deposit(2000);
account.withdraw(500);
account.currentBalance();
account.statement();


### Usage instructions

Clone the project and then cd into it



```



```




```




```


Project file structure

```


```
