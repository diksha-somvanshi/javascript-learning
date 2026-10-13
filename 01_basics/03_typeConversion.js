//conversion and operation

// let score = "33abc"
// let value = Number(score)
// console.log(typeof value)
// console.log(typeof score)
// console.log(value)

let score = null
let int = Number(score)
console.log(typeof score)

let score1 = undefined
let int2 = Number(score1)
console.log(int2)

let login = true
let int3 = Number(login)
console.log(int3)

login = false
let int4 = Number(login)
console.log(int4)

let num = 5
let bool = Boolean(num)
console.log(bool)

num = 0
bool = Boolean(num)
console.log(bool)

let str = "diksha"
num = Boolean(str)
console.log(num)

str = ""
num = Boolean(str)
console.log(num)