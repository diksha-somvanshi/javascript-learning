// nested scope
function one(){
    const username = "Kiran";
    function two(){
        //const website = "www.google.com";
        console.log(username)
    }
    // console.log(website);
    two()
}
one()

if(true){
    const username = "hitesh";
    if(username === "hitesh"){
        const website = " you tube";
        console.log(username + website)
    }
   // console.log(website)
}
//console.log(username);

//++++++++++++++++++++++++
console.log(addOne(0));
function addOne(value){
    return value+1;
}


const addTwo = function(num){ // expression using function
    return num+2;
}
console.log(addTwo(5));
