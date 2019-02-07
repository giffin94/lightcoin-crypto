class Transaction {
  constructor(amount, account) {
    this.amount = amount;
    this.account = account;
  }

  commit() {
    this.time = new Date();
    this.account.addTransaction(this);
    console.log(this.value);
  }
}

class Withdrawal extends Transaction {
  get value() {
    return this.amount * -1;
  }


}
class Deposit extends Transaction {

  get value() {
    return this.amount;
  }

}

class Account {

  constructor(username) {
    this.username = username;
    this.transactions = [];
  }

  get balance() {
    let balance = 0;
    this.transactions.forEach( (transaction) => {
      balance += transaction.value;
    })
    
    return balance;
    
  }

  addTransaction(transaction) {
    this.transactions.push(transaction);
  }
}



// DRIVER CODE BELOW
// We use the code below to "drive" the application logic above and make sure it's working as expected
const myAccount = new Account("JuiceFiend");

t1 = new Deposit(500, myAccount);
t1.commit();

t2 = new Withdrawal(9.99, myAccount);
t2.commit();

t3 = new Withdrawal(50.25, myAccount);
t3.commit();

console.log('Balance:', myAccount.balance);