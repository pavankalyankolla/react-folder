function Person(data){
    this.firstName = data.firstName;
    this.lastName = data.lastName;
    Person.data.push(this)
    //instance
    this.fullName = function(){
        return `${this.firstName} ${this.lastName}`;
    }

    this.greet = function(){
        return `Hello my name is ${this.firstName}`;
    }
}

//static
Person.data = [];

Person.race = function(){
    return 'person belongs to the human race';
}

Person.all = function(){
    return Person.data;
}

const p1 = new Person({firstName : 'pavan',lastName : 'kalyan'});
console.log(p1.fullName());
console.log(p1.greet());

console.log(Person.all());