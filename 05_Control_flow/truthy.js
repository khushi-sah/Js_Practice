// const userEmail = "k@gmail.com"

// if(userEmail){
//     console.log("Got user email");
// } else {
//     console.log("Don't have user email");
// }
// truthy values
// [], 'false', "false", {}, "0" , " ", function(){}   //this is called empty function (function(){})

//falsy values
// false, 0, -0, BigInt 0n, "", null, undefined, NaN

// if(userEmail.length === 0){
//     console.log("Array is Empty");  
// }

const emptyObj = {}

if (Object.keys(emptyObj).length === 0){
    console.log("object is Empty");
}

//Nullish Coalescing Operator (??) : null undeffined

let val1;
//val1 = 5 ?? 10
//console.log(val1); //op:5

//val1 = null ?? 10
//console.log(val1); //op:10

// val1 =undefined ?? 15
// console.log(val1); //op:15

// val1 = null ?? 10 ?? 100
// console.log(val1);  //op:10

// Terniary Operator
//condition ? true : false

const iceTeaPrice = 100
iceTeaPrice >= 80 ? console.log('less than 80') : console.log("more than 80")  //op:less than 80

