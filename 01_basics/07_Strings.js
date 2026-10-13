let name = "diksha"
let age = 21;

// old -->
console.log("name : "+name+" age :"+age)//should not be used 

console.log(`i am ${age}, my name is ${name}`)// this is good way
// string interpolation --> placeholder is made in string itself to print it directly...

//string declaration
let clg = new String("kit kolhapur")
let str = "clg"// creates the object
console.log(clg)
console.log(typeof clg)
console.log("+++++String methods++++++++++")

//1. Creating and accessing strings

console.log(clg[0])
console.log(clg.length)

console.log(clg.toUpperCase())
console.log(clg.toLowerCase())

console.log(clg.includes("kit"))
console.log(clg.startsWith("kit"))
console.log(clg.endsWith("kolhapur"))

console.log(clg.indexOf("kit"))
console.log(clg.slice(0,4))
console.log(clg.substring(4,clg.length))

//. trim() ⭐
name = " durwa "
console.log(name.trim())
console.log(name.trimStart())
console.log(name.trimEnd())

//replace and replace all
let text = "I like cats. Cats are cute.";
text.replace("cats","dogs")
text.replaceAll("cats","dogs")

//split
const sentence = "javascript is awesome"
const words = sentence.split(" ")
console.log(words)

//7. join() — the opposite of split()
const word = ["JavaScript", "is", "awesome"];
const sent = word.join(" ");
console.log(sent)
const input = "YES";

if (input.toLowerCase() === "yes") {
    console.log("Accepted");
}
text = "My phone number is 9876543210";

console.log(/\d+/.test(text));