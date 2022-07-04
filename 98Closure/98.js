// closures

//function can return functions

// function outerfunction(){
//    function innerfunction(){
//     console.log("hello world");
//    }
//    return innerfunction;
// }

// const ans = outerfunction();

// // console.log(ans);
// ans();


function printFullName(firstname,lastname){
    function printName(){
     console.log(firstname, lastname);
    }
    return printName;
 }
 
 const ans = printFullName("sachin","singh");
 
 // console.log(ans);
 ans();