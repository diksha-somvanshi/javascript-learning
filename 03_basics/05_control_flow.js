if(true){
// this block is executed
}
if(false){
    // code in this will not be executed
}
let isUserLoggedIn = true
if(isUserLoggedIn){
console.log("login successful..!")
}
if(2 == "2"){
console.log("executed") // datatype is not strictly checked
}
if(2 === "2"){
console.log("executed") // datatype is not strictly checked
}
const score = 200;
if(score > 100){
    const power = "fly"
    console.log("user power : ",power)
}

const temperature = 41;
if(temperature < 50){
    console.log("temperature less than 50");
}else{
    console.log("temp greter than 50");

}
// variables defined inside if or else block can't accessed outside of it
const balance = 1000;
if(balance >500) console.log("test");

//nested conditions
if(balance < 500){
    console.log("less than")
} else if(balance < 750){
    console.log("less than 750")
} else if(balance < 900){
console.log("less than 900")
} else{
    console.log("less than 1200")
}

const user = true;
const card = true;

if(user && card){
    console.log("allow to buy course")
}

const loggeInFromGoogle = true;
const loggedInFromMail = false;
if(loggeInFromGoogle || loggedInFromMail){
    console.log("allowed to login");
}
