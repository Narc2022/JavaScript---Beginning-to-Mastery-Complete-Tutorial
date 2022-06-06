
//reference type
// let array1 = ["item1","item2"];
// let array2 = array1;

// console.log(array1===array2);

//not valid clone array for maximum data

// let array1 = ["item1","item2"];
// let array2 = ["item1","item2"];
// array1.push("item3");
// console.log(array1===array2);
// console.log(array1);
// console.log(array2);

//valid clone array for maximum data (slice)

// let array1 = ["item1","item2"];
// let array2 = array1.slice(0);
// array1.push("item3");
// console.log(array1===array2);
// console.log(array1); 
// console.log(array2);

//2nd way for valid clone array for maximum data (concate)

// let array1 = ["item1","item2"];
// let array2 = [].concat(array1);
// array1.push("item3");
// console.log(array1===array2);
// console.log(array1); 
// console.log(array2);

//3rd way for valid clone array for maximum data (spread operator)
//maximum used

// let array1 = ["item1","item2"];
// let array2 = [...array1];
// array1.push("item3");
// console.log(array1===array2);
// console.log(array1); 
// console.log(array2);

//Add elements in array in slice method in clone

// let array1 = ["item1","item2"];
// let array2 = array1.slice(0).concat(["item4","item5"]);
// console.log(array1===array2);
// console.log(array1); 
// console.log(array2);

//Add elements in array in spread operator in clone

// let array1 = ["item1","item2"];
// let array2 = [...array1,"item3","item4"];
// console.log(array1===array2);
// console.log(array1); 
// console.log(array2);

//Add elements in array in spread operator in clone

// let array1 = ["item1","item2"];
// let oneMoreArray = ["item3","item4"]
// let array2 = [...array1,...oneMoreArray];
// console.log(array1===array2);
// console.log(array1); 
// console.log(array2);