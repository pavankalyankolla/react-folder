const fruits = ['apple','mango','water melon'];

function transform(fruits){
    // imperative style
//     let output = [];
//     fruits.forEach((fruit) => {
//         output.push(`I like ${fruit}`)
//     })
//     return output;
// }

    //declartive

//     let output = fruits.map(function(fruit){
//         return `I like ${fruit}`;
//     });
//     return output;
// }
    
    return fruits.map(function(fruit){
        return `I like ${fruit}`;
    })
}  

const result = transform(fruits);
console.log(result);
//es6 

console.log(fruits.map((fruit) => `I like ${fruit}`));