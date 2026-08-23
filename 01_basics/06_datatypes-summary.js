// summary of datatypes

// primitive datatypes
// 7 types : strings , number , boolean null, undefined , symbol
//bigint - handles scientific data
const score = 122
const scorevalue = 100.3

const isloggedIn = false;
const temp = null
let useremail = undefined;

const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id == anotherId)

const bigint = 121111122223232n


//Reference(non primitive)
//Array, object, functions
const heros = ["shaktiman","nagraj","doga"]

let myobj = {
    roll_no:123,
    name : "diksha",
    age : 21

}

const fun = function(){
    console.log("hello");
}
console.log(typeof bigint);
console.log(typeof fun);
console.log(typeof undefined)

console.log(typeof temp)
console.log(typeof anotherId)

console.log(typeof myobj)
console.log(typeof heros)

//datatypes of values 
// null --> object
//integer --> number
//floating point --> number
//words --> string
//values defined using symbol fun --> symbol
//type of un initialized/undefined --> undefined
//function--> function
//big integer --> bigint
//array --> object
// object is defined like dictionary in python--> object

//+++++++++++++++++++++++++++++++++++++++++++++++++++
// stack (primitive),,, heap (non primitive)
// primitve -- copy created
// non primitive -- reference returned
console.log("+++++++++++++++++++++++++++++++++++++++++++++++++++")
let name = "diksha"
let name2 = "monika"
name2 = "kiran"

console.log(name2)
console.log(name)//original is not modified

let user1 = {
    name : "diksha",
    email : "abc@gmail.com",
    age : 21

}
let user2 = user1;

user2.age = 20; // original value of user1 is also changed

console.log(user1.age)
console.log(user2.age)


