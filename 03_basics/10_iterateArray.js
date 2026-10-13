// for of loop
let arr = [2,3,3,45,33];
for (const element of arr) {
    console.log(element)
}

const greet = "hello world!";
for(const word of greet){
    console.log(`each char is ${word}`)
}

//maps
const map = new Map();
map.set(1,"diksha");
map.set("kiran","vadi");
console.log(map)

for (const [key,val] of map){
    console.log(key,":-",val)
}
let myobj = {
    1 : "diksha",
    2:"ankita"
}
// for (const [key, val] of myobj) {
//     console.log(key,":-",val)
// }m--->not iterable

const obj2 = {
    js : "javascript",
    html : "hypertext markup language",
    css : "cascading style sheet",
}
for (const key in obj2) {
    console.log(`${key} is shortcut for ${obj2[key]}`);    
}

//for in for array
const programming = ["js","rb","py","java","cpp"];
for (const key in programming) {
    console.log(key); // key for array are indices
}
programming.forEach(function(item){
    console.log(item)
})
 
programming.forEach((item) =>{
    console.log(item);
})
function printme(item){
    console.log(item);
}
programming.forEach(printme)

programming.forEach((item,index, arr)=>{
    console.log(item, index, arr);
})

//[{}{}{}]
const mycoding = [{
    langName : "javascript",
    file : ".js"},
    {langName : "java",
        file: ".java"
    },
{
    langName: "python",
    file : ".py"
}]
mycoding.forEach((item)=>{
    console.log(item.langName);
})