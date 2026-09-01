//for loop
for(let i=1; i<11; i++){
    console.log(i);
}

//nested for
for(let i=1; i<4; i++){
    console.log("\ntable of ",i,);
    for(let j=1; j<11; j++){
    console.log(`${i} * ${j} = ${i*j}`);
}
}
let arr = [1,2,3,,4,5];
for (let i =0; i<arr.length; i++) {
    console.log(arr[i]);
}

//keywords --> break, continue

for(let i = 1; i<11; i++){
    if(i == 5){
        console.log("5 is best")
        break; // breaks the loop
    }
    console.log(`value of i is ${i}`)
}
for(let i = 1; i<11; i++){
    if(i == 5){
        console.log("5 is best");
        continue; // breaks the loop
    }
    console.log(`value of i is ${i}`);
}
