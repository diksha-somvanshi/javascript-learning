const score = 400;

const balance = new Number(100);//--> specificaly defining number
console.log(balance);

console.log(balance.toString())
console.log(balance.toString().length)
console.log(balance.toFixed(1))

const num = 23.83222;
console.log(num.toPrecision(3))
console.log(num.toPrecision(2))
console.log(num.toPrecision(1))

const num2 = 1000000;
console.log(num2.toLocaleString('en-IN'));

//=======Maths========
//by default provided in javascript/

console.log(Math);

console.log(Math.abs(-4));
console.log(Math.round(4.6));
console.log(Math.ceil(4.5));
console.log(Math.floor(4.8));
console.log(Math.sqrt(25))
console.log(Math.min(1,2 ,2));

console.log(Math.random())//return value between 0 & 1
console.log((Math.random()*10)+1)
console.log(Math.random())

const min = 10;
const max = 20;
console.log(Math.floor((Math.random()*(max - min +1)))+min)