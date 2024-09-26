//for

for (let i = 0; i <= 10; i++) {
    const element = i;
    if(element == 5){
       // console.log("5 is best number");
    }
    //console.log(element);
    
}

for (let i = 1; i <= 10; i++) {
    //console.log(`Outer Loop value: ${i}`);
    
    for (let j = 1; j <= 10; j++) {
        //console.log(`Inner Loop value ${j} and inner loop ${i}`);
    //console.log(i + '*' + j + ' = ' + i * j);
    
    }
}

let myArray = ["Khushi","Shri", "OM", "JAI"]
//console.log(myArray.length);

for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    //console.log(element);
}
  
// break and continue

for (let index = 1; index <= 20; index++) {
    if(index == 5){
        console.log(`Detected 5`);
        break                //op: 1 2 3 4 Detected 5
    }
    console.log(`Value of i is ${index}`);
    
}
for (let index = 1; index <= 10; index++) {
    if(index == 5){
        console.log(`Detected 5`);
        continue                //op: 1 2 3 4 6 7 8 9 10
    }
    console.log(`Value of i is ${index}`);
    
}

