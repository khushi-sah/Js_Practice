//Immediately Invoked function expressions (IIFE)


//Named IIFE
(function Chai(){
    console.log(`DB Connected`);  
})();


//Simple IIFE
((name) => {
    console.log(`DB Connectd Two ${name}`);
} ) ('Khushi')


//======================================
//======================================
// JAVAScript Execeutiopn Context
//=============================
//Global Execution Context
//Function Execution Context
//EVAL Execution Context
//================================
//{} = memory creation phase

// 1. Global Execution  : this

// 2. Memory Phase
// suppose this is the function we define
//let val1 =10
// let val2 = 5
// function addNum (num1, num2){
//     let total = num1 +num2
//     return total
// }
// let result1 = addNum(val1, val2)
// let result2 =-addNum(10,2)

// memory creation :=======
//val1 = undefined
//val2 = undefined
//addNum = defination
//result1 = undefined
//result2 = undefined

// 3. execution Phase
//val1 = 10
//val2 = 2
//addNum = defination
//result1 = undefined
//result2 = undefined