//ItreateObject




const person = {
    name:"sachin",
    age:'26',
    "Hobbies":["Business","Inovataion","Development"]
}

//for in loop

// for(let key in person){                     
//     //console.log(person[key]);               //only key
//     //console.log("key",":",person[key]);     //value with key
//     //console.log(`${key} : ${person[key]}`); //with templete string
//     //console.log(key,":",person[key]); 
// }

//Object.keys

console.log(Object.keys(person));
console.log(typeof (Object.keys(person)));
const val = Array.isArray(Object.keys(person));
console.log(val);