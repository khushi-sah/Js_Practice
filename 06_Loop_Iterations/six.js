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

// const newNum =[]

// myNums.forEach((num)=>{
// if(num > 4) {
//     newNum.push(num)
// }
// })
// console.log(newNum);

const books = [
    { title: 'Book1', genre: 'Fiction', publish: 2011, edition: 2012},
    { title: 'Book2', genre: 'Love', publish: 2012, edition: 2013},
    { title: 'Book3', genre: 'Mystry', publish: 2013, edition: 2014},
    { title: 'Book4', genre: 'Biography', publish: 2014, edition: 2015},
    { title: 'Book5', genre: 'History', publish: 2015, edition: 2016},
    { title: 'Book6', genre: 'Horror', publish: 2016, edition: 2017},
];

let userBooks = books.filter( (bk) => bk.genre === 'Horror')
userBooks = books.filter( (bk) => { 
    return bk.publish >=2012 && bk.genre === "Mystry"
 })

console.log(userBooks);

