const mail = "abc@123";
if(mail){
    console.log("got user mail")
}else{
    console.log("don't have user mail")
}

//falsy values
// false, 0, -0, bigint 0n, "",null, undefined, NaN

// truthy values
//"0",'false'," ",[],{}, function(){}
if([]){
    console.log("true")
}
const obj = {};
if(Object.keys(obj).length == 0){
    console.log("obj is empty")
}

// false == 0 --> true
// false == '' --> true
// 0==''-->true

//Nullish coalescing operator (??) : null undefined

let val1;
val1 = 5 ?? 10; // while taking values from database or firebase, we got two values instead single
//sometimes null value comes, so it is confusing , so in these cases this (??) operator is useful
// to check which value should be assigned
console.log(val1)

val1 = null ?? 10
console.log(val1) // null value can cause problem later on , so 10 is assigned

val1 = undefined ?? 15
console.log(val1)
// this operator is mainly made for null undefined

val1 = null ?? 10 ?? 20
console.log(val1)

//Ternary Operator
// conditon ? true : false
const price = 100;
price >= 80 ? console.log("greater than 80 "):console.log("less than 80")

