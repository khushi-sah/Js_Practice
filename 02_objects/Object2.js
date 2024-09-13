// const tinderUser = new Object()

const tinderUser = { }

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

//console.log(tinderUser);

const regularUser ={
 email: "some@gmail.com",
fullname: {
 userfullname:   {
	firstname: "khushi",
	lastname: "kumari"
	}
        }
}

console.log(regularUser.fullname.userfullname.lastname);         //o/p: kumari

const obj1 = {1: "a", 2:"b"}
const obj2 = {3: "a", 4:"b"}

//const obj3 = { obj1, obj2}

//const obj3 = Object.assign({ } ,obj1, obj2)
//console.log(obj3);		//o/p: {'1': 'a', '2': 'b','3': 'a', '4': 'b'}

const obj3 = { ...obj1, ...obj2}
console.log(obj3);		//o/p: {'1': 'a', '2': 'b','3': 'a', '4': 'b'}

const users = [
	{
		id:1,
		email: "k@gmail.com"
	},
{
		id:2,
		email: "A@gmail.com"
	},
{
		id:3,
		email: "B@gmail.com"
	},
]

users[1].email
console.log(tinderUser); 	//o/p:{ id: '123abc' , name : 'Sammy' , isloggedIn: false }

console.log(Object.keys(tinderUser));	//o/p: [ 'id', 'name' , 'isloggedIn']
console.log(Object.values(tinderUser));	//o/p: [ '123abc' ,'Sammy' ,false]
console.log(Object.entries(tinderUser));	//o/p: [ [ 'id', '123abc' , 'name' ,'Sammy' ,  'isloggedIn', false ] ]

console.log(tinderUser.hasOwnProperty('isloggedIn')); 	//o/p: True

//-------Object Destruture------
const course = {
	coursename : "js in hindi" ,
	price : "999" ,
	courseInstructor : "hitesh"
}

//course.coursename

const {courseInstructor :instructor} = course

console.log(instructor);		//o/p:hitesh

console.log(instructor);
//Api
