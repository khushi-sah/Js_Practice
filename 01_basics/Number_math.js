const score = 400
console.log(score);

const balance = new Number(100)
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(2));// after decimal 2 digit showing

const otherNumber = 123.8966
console.log(otherNumber.toPrecision(3));

const hundreds =100000
//console.log(hundreds.toLocaleString('en-IN'));

//+++++++++++++++MATHs+++++++++++++++

console.log(Math);
console.log(Math.abs(-4));
console.log(Math.round(4.6));
console.log(Math.ceil(4.2));
console.log(Math.floor(4.9));
console.log(Math.min(4,3,6,9));
console.log(Math.max(43,6,9));

console.log(Math.random());   //o/p : 0.567868789 or 0.67869678978
console.log(Math.random()* 10 +1); //o/p :7.7687897889080

console.log(Math.floor(Math.random()* 10 +1)); //o/p :7

const min = 10
const max = 20

console.log(Math.floor(Math.random()* ( max - min +1)) + min);  //o/p :17
// Note : (Math.floor(Math.random()* ( max - min +1)) + min) this is for the conditional number when we want.