// array is object
//collection of multiple elements
//js arrays are resizable

// mixed datatype values can be stored in same array
//0 based indexing

//array copy operation makes shallow copy 
//shallow copy --> shares the same reference of array
//changes made in copy reflects in original array 


//deep copy_---> do not share the same reference
//changes made in copy do not affect original array

//Array methods

const myArr = [0, 1, 2, 3, 4, 5];
console.log(typeof myArr);
const heros = ["shakti","naagraj"];

const arr2 = new Array(1,2,2,3);
console.log(arr2)

// console.log(myArr[0]);
// console.log(myArr.length);

//array methods

arr2.push(6);
console.log(arr2);

arr2.push(7);
console.log(arr2);

arr2.pop();

arr2.unshift(9); // adds element at the begining

console.log(arr2);
arr2.pop();

console.log(arr2.includes(9));
console.log(arr2.indexOf(9));

const newarr = arr2.join()//convert array into a string
console.log(newarr);
console.log(typeof newarr);

console.log("A ",arr2);

const myn1 = arr2.slice(1,3); //---> doesn't modify the original array

console.log(myn1);
console.log(arr2);


const myn2 = arr2.splice(1,3);
console.log(myn2);
console.log(arr2);

let names = ["diksha","akansha","gayatri","kavya"];
let names2 = ["kiran","rushi","sankalp","roshan"];

let name3 = names.concat(names2);//merging two arrays
console.log(name3);

let newname = [...names,...names2];
console.log(newname);

names.push(names2);
console.log(names)//name2 array added to names 

console.log(names[4][1]);

let a = [1,2,3,[4,5,6],[7,6[4,5]]];

let series = a.flat(Infinity);
console.log(series);

console.log(Array.isArray("diksha"));// it is string

console.log(Array.from("diksha"));

console.log(Array.from({name:"diksha"}));//intresting--> specify of which array you want keys or values

let x = 10;
let y = 20;
let z = 30;
console.log(Array.of(x , y, z))




