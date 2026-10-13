const mynums = [1,2,3,4];
let total = mynums.reduce(function (acc, curr){
    console.log(`acc : ${acc}, curr : ${curr}`)
    return acc+curr;
},0)
console.log(total);
//using arrow function 
total = mynums.reduce((acc,curr)=> acc+curr,0);
console.log(total);

const cart = [
    {itemname : 'javascript',
    price :999},
    {itemname : 'python',
    price :299},
    {itemname : 'c++',
    price :699},
    {itemname : 'data science',
    price :12999}
];

total = cart.reduce((acc,item)=>acc+item.price,0);
console.log(`total bill : ${total}`);