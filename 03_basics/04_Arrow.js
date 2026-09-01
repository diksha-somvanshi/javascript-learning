const user = {
    username : "abhijeet",
    price : 999,
    welcomeMessage : function(){
        console.log(`${this.username} , welcome to website`)
        console.log(this)
    }
};
user.welcomeMessage();
user.username = "sam";
user.welcomeMessage()

console.log(this) // given empty curly braces

function chai(){
    console.log(this)
};

// function declaration using arrow function

const welcome =() =>{
    let name ="diksha";
    console.log(name)
    // this keyword cannot used in the arrow function

}

const addition = (num1, num2)=> {
    return num1+num2;
}
const addTwo= (num1, num2) => (num1+num2); // implicit return , mostly used in react
console.log(addTwo(9,4));
console.log(addition(9,8))
console.log(addTwo(5,6));


// IIFE - immediately invoked function expression 
// global scope ke pollution se bachne ke liye iife
//named iife
(
    function connection(){
        console.log("database connected successfully")
    }
)();
// simple iife - without function name, using arrow function
(
    (name) => {
        console.log(`hello, ${name}`)
    }
)("diksha"); // passing parameters from this bracket
