const name ="khushi"
const repoCount=50

//console.log(name + repoCount + "value");


//String Interpolation
console.log(`Hello my name is ${name} and my repo Count is ${repoCount}`);

const gameName = new String('khushi-kk-com')

//console.log(gameName[0]);
//console.log(gameName.__proto__);

//console.log(gameName.length);
//console.log(gameName.toUpperCase());

//console.log(gameName.charAt(2));
//console.log(gameName.indexOf('h'));

const newString = gameName.substring(0,4)
console.log(newString);

const anotherString = gameName.slice(-8,3)
console.log(anotherString);

const newStringOne = "  khushi  "
console.log(newStringOne);
console.log(newStringOne.trim());

const url="https://www.google.com/google%20Image"

console.log(url.replace('%20', '-')); //o/p:https://www.google.com/google-Image
console.log(url.includes('google'));

console.log(gameName.split('-'));

