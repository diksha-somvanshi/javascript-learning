
function saymyname(){
console.log("D");
console.log("I");
console.log("K");
console.log("S");
console.log("H");
console.log("A"); 
}
saymyname()

function addTwoNumber(number1, number2){
    console.log("diksha")
    return (number1+number2)
    
}
// addTwoNumber(1,"a");
// // addTwoNumber(1, null);
// console.log("result : ",addTwoNumber(9,10))

function login(username = "rushi"){ // default value is added so if block is not executed
    if(username === undefined){ //username === undefined --> !username
        console.log("please enter a username");
        return;
    }
    return `${username} just logged in`;
}
console.log(login("diksha"))
console.log(login())// passing no username , undefined - bydefault

//shooping card --> new elements (multiple)can be added to shopping list
function calculatePrice(...num1){ // rest operator --> ... add variable no of arguments it return an array
    return num1; // returns the array of numbers being passed
}
console.log(calculatePrice(9,4,4))

// passing regular integers and other values in spread operator
function totalcalculatePrice(val1, val2,...num1){ 
    // rest operator --> ... add variable no of arguments it return an array
    console.log(val1);
    console.log(val2)
    return num1;
}

console.log(totalcalculatePrice(100, 200, 300,3000))

// passing object to the function
const user = {
    name : "diksha",
    price : 3000
}
function objfunction(anyobj){
    console.log(`username is ${anyobj.name} & price is ${anyobj.price}`)
}
objfunction(user)
objfunction({
    name : "rushikesh",
    price : 3500
})

function returnSecondvalue(array){
    return array[1];
}
console.log(returnSecondvalue([1,2,3]))


