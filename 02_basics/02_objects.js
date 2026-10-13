//singleton -->> only one obj can be made from this
//object can be declared in two ways--> 1. literal 2. constructor

//obj made using constructor --> singleton otherwise --> has multiple instances
// Object.create()//--->this is obj by constructor method used to create singleton obj

//object literals
const sym = Symbol("key1");
const user = {
    name : "diksha",
    id : 121,
    isloggedIn : true,
    "age" : 21,
    "current location": "kolhapur",
    lastLoginDays : ["Monday","Saturday"],
    sym : "$"
};

//access properties
console.log(user.name);
console.log(user["name"]);

console.log(user["current location"]);

console.log(user[sym]);
//there is space between two words we can't access by dot method

user.name = "rushikesh";
console.log(user["name"]);

//lock values of objects --> freeze object
// Object.freeze(user);
user.age = 5;
console.log(user["age"]);
console.log(user)

user.greeting = function(){
    console.log(`hello js user..${this.name}!`)
}
console.log(user.greeting());


