//ItreateObject
const person = {
    name:"sachin",
    age:'26',
    "Hobbies":["Business","Inovataion","Development"]
}

/*for in loop
Object.keys*/

// for(let key in person){
//     console.log(key," : ",person[key]);
// }

// // output 
// // name  :  sachin
// // age  :  26
// // Hobbies  :  [ 'Business', 'Inovataion', 'Development' ]

// console.log(typeof (Object.keys(person)));        //output = object
// const val =Array.isArray((Object.keys(person)));   
// console.log(val);                                 //output = true

/*for of loop*/

// for(let key of Object.keys(person)){
//      console.log(person[key]);
// }

/*output

sachin
26
[ 'Business', 'Inovataion', 'Development' ]*/