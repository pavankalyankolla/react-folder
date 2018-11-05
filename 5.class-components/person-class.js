class Person{
    constructor(data){
        this.firstName = data.firstName;
        this.lastName = data.lastName;
        Person.data.push(this);
    }
    fullName(){
        return `${this.firstName} ${this.lastName}`
    }
    greet(name){
        return `Hi ${name} my name is ${this.firstName}`
    }

    static race(){
        return 'person belongs to the human race';
    }

    static all(){
        return Person.data;
    }

    static count(){
        return Person.data.length;
    }
}
Person.data = []

const p1 = new Person({firstName : 'pavan',lastName:'kalyan'});

console.log(p1.fullName());
console.log(p1.greet('jagan'));
console.log(Person.race());
console.log(Person.count());
console.log(Person.all());
