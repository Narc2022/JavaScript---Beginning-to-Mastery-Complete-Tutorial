//object reference type
//arrays are good but not sufficient
//for real world data
//object store key value pairs
//objects don't have index



//how to create object

// const person = {name:"Sachin",age:26}
// // console.log(typeof person.age);
// console.log(person.name);
// console.log(person.age);

//Array in objects

const persons = {
    name:"Sachin",
    age:26,
    hobbies:[
        "machine",
        "music",
        "programming"
    ]
}
// console.log(persons.hobbies);

// //how to add key value pair to objects

// persons.gender ="male";
// console.log(persons);


//how to access data from object

console.log(persons["name"]);
console.log(persons["age"]);
console.log(persons["hobbies"]);


