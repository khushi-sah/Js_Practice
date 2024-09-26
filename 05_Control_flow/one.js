//if 
// const isUserloggedIn =true

// if ( 2== "2"){
//     console.log("executed");
// }

// const temp=41
// if(temp===41){
//     console.log("less then 50");
// }else{
//     console.log("greater then 50");
// }

// <, >, <=, >=, ==, !=, ===(strict type check)

// const score = 200

// if (score > 100) {
//     let power ="fly"
//     console.log(`user power: ${power}`);   
// }

// console.log(`user power: ${power}`);


//Short hand location

// const bal =1000

// //if (bal> 500) console.log("test"), console.log("test2");

// if(bal <500){
// console.log("less than");
// } else if( bal<800){
//     console.log("less than 800");
// }else if( bal<900){
//     console.log("less than 800");
// }else{
//     console.log("less than 1200");
// }

const userLoggedIn = true
const debitCard = true
const LoggedInFromGoogle = false
const LoggedInFromEmail = true

if(userLoggedIn && debitCard && 2==3){
    console.log("Allow to buy course");
}
//&& all condition must be true

if(LoggedInFromGoogle || LoggedInFromEmail){
    console.log("User Logged in");
}
// || one condition must be true
