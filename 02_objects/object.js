//singleton

//object.create

//object literals


const mySym=Symbol("key1")

const JsUser = {
name : "Khushi",
"full name" : "Khushi Kumari ",
//mySym : "mykey1",
[mySym] : "mykey1",
age :20,
Location : "JSR",
email :"abc@gmail.com",
isLoggedIn : false,
lastLogginDays: ["Monday", "Saturday"]
 }

console.log(JsUser.email);
console.log(JsUser["email"]);
console.log(JsUser["full name"]);
console.log(typeof JsUser.mySym);  //o/p: string

console.log(JsUser[mySym]); //o/p:mykey1

JsUser.email = "kk@gmail.com"
//object.freeze(JsUser)		//o/p:kk@gmail.com
JsUser.email = "KS@gmail.com"
console.log(JsUser);		//o/p:kk@gmail.com

JsUser.greeting = function(){
console.log("Hello JS USER");
}

JsUser.greetingTwo = function(){
console.log(`Hello JS USER, ${ this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
















