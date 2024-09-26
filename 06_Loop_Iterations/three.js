//Array specific loop

// ["", "" , ""]
// [ {] ,{} ,{} ]

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
   // console.log(num);
}

const greetings  =" Hello world!"
for (const greet of greetings) {
    //console.log(`Each Char is ${greet}`);
    
}

//Map (for unique value)

const map = new Map()
map.set('In',2)
map.set('two',3)
map.set('Apple', 5)

//console.log(map);

for (const [key, value] of map) {
   console.log(key, ':-', value); 
}

