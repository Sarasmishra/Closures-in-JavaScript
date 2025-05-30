function createBankAccount(balance){
    function deposit(amount){
        balance+=amount
        return balance
    }
    function withdraw(amount){
        if(balance<amount){
            return "not possible"
        }
        balance-=amount
        return balance
    }

    function getBalance(){
        return balance
    }
            return {
        deposit,
        withdraw,
        getBalance
    }
}

const account = createBankAccount(100);

console.log(account.deposit(50)); // Output: 150

console.log(account.withdraw(30)); // Output: 120

console.log(account.getBalance()); // Output: 120