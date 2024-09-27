//const coding =["JS", "JAVA","PHP", "C#"]

// const values = coding.forEach ((item)=>{
// console.log(item);
// return item
// })

// console.log(values); //item
//foreach can't be return


//filter also take call back function and returns
const myNums=[1,2,3,4,5,6,7,8,9,10]

//const newNums = myNums.filter( (num) => num > 4) 

// if we write in {} then must be write return
// const newNums = myNums.filter( (num) => {
//     return num > 4
// }) 

// console.log(newNums);   //op: [5, 6, 7, 8, 9, 10]

//with forEach loop

const newNum =[]

myNums.forEach((num)=>{
if(num > 4) {
    newNum.push(num)
}
})
console.log(newNum);
