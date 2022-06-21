// array destructuring

//normal Method

// const myArray = ['value1','value2'];
// let myvar1 = myArray[0];
// let myvar2 = myArray[1];
// console.log('value of var1',myvar1);
// console.log('value of var2',myvar2);




//Latest Method in js

// const myArray = ['value1','value2'];
// let [myvar1,myvar2,myvar3]= myArray;
// myvar1 = "value changed";
// console.log('value of var1',myvar1);
// console.log('value of var2',myvar2);




//skip one value

// const myArray = ['value1','value2','value3'];
// let [myvar1,,myvar3WithoutValue2]= myArray;
// console.log('value of var1',myvar1);
// // console.log('value of var2',myvar2);
// console.log('value of var3',myvar3WithoutValue2);




//half array value in another

// const myArray = ['value1','value2','value3','value4'];
// let [myvar1,myvar2]= myArray;
// let myNewArray = myArray.slice(2);
// console.log('value of var1',myvar1);
// console.log('value of var2',myvar2)
// console.log(myNewArray);


//latest method of half array value in another
// const myArray = ['value1','value2','value3','value4'];
// let [myvar1,myvar2, ...myNewArray]= myArray;
// console.log('value of var1',myvar1);
// console.log('value of var2',myvar2)
// console.log(myNewArray);