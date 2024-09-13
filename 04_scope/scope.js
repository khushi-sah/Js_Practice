//if (true) {
   // let a = 10
    //const b = 30
    //var c = 20
//}

//console.log(a); //op:not defined
//console.log(b);  //op:not defined
//console.log(c);  //op:30

let a =300

if (true) {
    let a = 10
    const b = 30
   c = 20
    //console.log("Inner:", a); //op:10
}
//console.log(a);  //op:300

function one(){
    const username = "khushi"

    function two(){
        const website = "youtube"
        console.log(username);
      }
    //console.log(website);
    two()
}

//one()

if (true) {
    const username = "khushi"
    if (username === "khushi") {
        const website = "Youtube"
        //console.log(username + website);
     }
     //console.log(website);
}

//console.log(username);

//~~~~~~~~~~~~~~~~~~~~~~~~


console.log(addone(5));   //op: 6 and it will execute

function addone(num){
    return num + 1
}


const addTwo =function(num){           // note: this is callled hoisting (function declaration where the variable hold the function value)
    return num + 2
}

addTwo(5)           // if we declare addTwo(5) above the addTwo function then it will throw error. but after the declaration it will be execute.
