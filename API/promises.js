fetch('https://somthing.com')

const promiseOne = new Promise(function(resolve, reject){
    //do an asynchronous task
    // db calls, cryptography, network calls
setTimeout(function(){
    console.log('Promise One is resolved');
    resolve();
},1000);
})

promiseOne.then(function(){
    console.log('Promise One is consumed');
})

new Promise (function(resolve, reject){
    setTimeout(function(){
        console.log('Promise Two is resolved');
        resolve();
    },2000);
}).then(function(){
    console.log('Promise Two is consumed');
})

const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
         resolve({username:'Diksha',email: 'abac@gmail.com'})
},1000)
})

promiseThree.then(function(user){
    console.log(user);
})


promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        const error = true;
       if(!error){
            resolve({username:"farhan",password:"1234"});
       } else {
            reject('Error: Something went wrong');
       }

})
})

promiseFour.then(function(user){
    console.log(user);
    return user.username;
}).
then(function(username){
    console.log(username);
}).
catch(function(error){
    console.log(error);
}).
finally(function(){
    console.log('Promise four is either resolved or rejected');
})

const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        const error = true;
       if(!error){
            resolve({username:"javascript",password:"123"});
       } else {
            reject('Error: js went wrong');
       }
},1000)
}

//async - await
// async function consumePromiseFive(){
//     try{
//         const response = await PromiseFive;
//         console.log(response);
//     } catch(error){
//         console.log(error);
//     }
// }
// consumePromiseFive();


// ,async function getAllUsers(){
//     try{
//         const response = await fetch('https://jsonplaceholder.typicode.com/users');
//     const data = await response.json();
//     console.log(data);
//     }catch(error){
//         console.log(error);
//     }
// }
// getAllUsers()

