//intro to array
//reference type
//how to create array

//ordered collection of items

/*let fruits = ["apple","mango","grapes"];
let numbers = [ 1,2,3,4];
let mixed = [1,2,2.3,'string',null,undefined];
console.log(mixed);
console.log(numbers);
console.log(fruits[2]);*/

let fruits = ["apple","mango","grapes"];
let obj = {}
console.log(fruits);//[ 'apple', 'mango', 'grapes' ]
fruits[0] = 'banana';
console.log(fruits); //[ 'banana', 'mango', 'grapes' ]
console.log(typeof(fruits)); //object
console.log(Array.isArray(fruits));
console.log(Array.isArray(obj));