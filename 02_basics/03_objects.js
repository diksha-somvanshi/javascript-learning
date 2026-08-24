//singleton objects

const tinder = new Object()
tinder.id = "121"
tinder.name = "srushti"
console.log(tinder);

const regularUser = {
    email : "abc@kit.com",
    fullName : {
        username :{
            firstname : "diksha",
            lastname : "somvanshi"
        }
    }
}
console.log(regularUser.fullName)

//combining objects
const obj1 = {1:"a",2:"b"}
const obj2 = {3:"a",4:"b"}

// const obj3 = {obj1,obj2};
const obj3 = Object.assign(obj1,obj2);//-->OBJ1 -->itself get modified as values from obj2 added to it
console.log(obj3)

const obj4 = Object.assign({},obj1,obj2);//go to mdn reference
//{}-->acting as target , others are source, sources are combined into target
console.log(obj4)

const obj5 = {...obj1, ...obj2};//most oftenly used syntax
console.log(obj5)

const first = {
    name: "Diksha"
};

const second = {
    name: "Srushti"
};

const third = {
    ...obj1,
    ...obj2
};
// name = "diksha" get overriden by obj2's name

console.log(third);

//syntax used when value comes from databases
const users =[
    {id: 1,
        name: "Diksha",
        email: "diksha@example.com"},
    {id: 2,
        name: "Srushti",
        email: "srushti@example.com"}
]
console.log(users[0].email)
console.log(users[1].name)

console.log(Object.keys(tinder))
console.log(Object.values(tinder));

console.log(Object.entries(tinder)
)
console.log(tinder.hasOwnProperty("name"));