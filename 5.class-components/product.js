class Product {
    constructor(data){
        this.name = data.name;
        this.price = data.price;
    }
    details(){
        return `${this.name} -- ${this.price}`;
    }
}
let p1 = new Product({
    name : 'Marker',
    price : 15
})
console.log(p1.details());

class Book extends Product {
    constructor(data){
        super(data);
        this.author = data.author;
        this.pages = data.pages
    }
    details(){
        return `${super.details()} -- ${this.author} -- ${this.pages}`;
    }
}
let b1 = new Book({
    name : 'Day of the jackal',
    price : 450,
    author : 'Fredrick',
    pages : 410
});

console.log(b1.details());


class Mobile extends Product {
    constructor(data){
        super(data);
        this.model = data.model;
        this.manufacturer = data.manufacturer
    }
    details(){
        return `${super.details()} -- ${this.model} -- ${this.manufacturer}`;
    }
}
let m1 = new Mobile({
    name : 'Iphone',
    price : 125000,
    model : 'XS max',
    manufacturer : 'Apple' 
});

console.log(m1.details());