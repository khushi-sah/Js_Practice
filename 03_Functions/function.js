function khushi(){
  //  console.log("Hello");
   // console.log("Hi");
}

//khushi()

//function sum(num1, num2){
 //var num3=num1+num2;
 //console.log(num3);
 //}

  function sum(num1, num2){
     //let result = num1 +num2
     //return result
    return num1 + num2
     //console.log(" Khushi ");     Note: after return nothing can be executed.
   }

   const result = sum(2,5)
 //console.log("Result: ", result);

 //function loginUserMsg(username){
    //if(username === undefined){

    function loginUserMsg(username = "default"){
    if(!username){
   //     console.log(" PLZ enter username");
        return
    }
    return `${username} just logged in`
 }

 //console.log(loginUserMsg("Khushi"));
 //console.log(loginUserMsg());               //op:undefined

function calculateCartPrice(...num1){      //note:this operator ... called rest or spread operator
    return num1
}
console.log(calculateCartPrice(200, 400, 500));     //op:[200, 400, 500]

function calculateCartPrice(val1, val2,...num1){
    return num1
}
console.log(calculateCartPrice(200, 400, 500, 2000));       //op:[500, 2000]

const user = {
    username : "kk",
    price : 199
}

function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
}

handleObject(user)
handleObject({
    username: "Shristi",
    price: 399
})

const myNewArray = [100, 200, 300, 400]

function returnSecondvalue(getArray){
    return getArray[1]
}

//console.log(returnSecondvalue(myNewArray));
console.log(returnSecondvalue([100, 200, 300, 400]));  //op:200
console.log(returnSecondvalue([300, 400, 500]));        //op:400