//primitive

//7 types: string, number, boolean, null, undefined, symbol. BigInt

const score = 100
const scoreValue=100.3
const isLoggedIn = false
const outsideTemp = null

let userEmail; //undefined

const id = Symbol ('123')
const anotherId= Symbol ('123')

console.log(id === anotherId); //o/p: false

const bigNumber = 78978907876896086546567n

//Reference (non Primitive)

// Array, Objects, Functions

const heros = ["Shaktiman","doga"]
let myObj = {
    name : "khushi",
    age : 24
}
 const myFunction = function(){
    console.log("Hello world"); 
 }

console.log(typeof myFunction); //object function

//https://tc39.es/ecma262/#sec-abstract-operations

//++++++++++++++++++++++++++++++++++++++++

// Stack (Primitive), Heap (Non-Primitive)
 let myYoutubename = "khushi"

 let anothername = myYoutubename
 anothername = "chaiaurcode"

 console.log(myYoutubename); //o/p=khushi
 console.log(anothername); //o/p=chaiaurcode

 let userOne={
 email: "user@google.com",
 upi: "user@ybl"
 }


 let userTwo=userOne
 
    userTwo.email= "khushi@google.com"

    console.log(userOne.email); //o/p:khushi@google.com
    console.log(userTwo.email); //o/p:khushi@google.com
    
   



