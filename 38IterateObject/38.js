const key = 'email';
const person = {
    name:"Sachin",
    age:26,
    hobbies:["machine","music","programming"]
}

for(let key in person){
    // console.log(`${key} : ${person[key]}`);
    console.log(key,":", person[key]);
}