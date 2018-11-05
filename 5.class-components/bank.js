class Customer {
    constructor(data){
        this.name = data.name;
        this.balance = data.balance;
    }
    showDetails(){
        return `${this.name} - INR ${this.balance} `
    }

    transaction(code,amount){
        if(code == 1 ){
            if(amount >= this.balance){
                return 'Insufficient balance'
            } else {
                this.balance = this.balance - amount;
                return this.showDetails();
            }
        } else if(code == 0){
            this.balance = this.balance + amount;
            return this.showDetails();
        } else {
            return 'invalid code'
        }
    }
}
let c1 = new Customer({name : 'Pavan', balance : '2000'});

console.log(c1.showDetails());

console.log(c1.transaction(1,500));
// console.log(c1.showDetails());
console.log(c1.transaction(1,2000));
console.log(c1.transaction(0,3000));
console.log(c1.transaction(3,300));
