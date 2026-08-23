//date --> date is calculated from january 01 1970

//date object can be made

let date = new Date();
console.log(date.toString());
console.log(date.toDateString());
console.log(date.toLocaleString());
console.log(typeof date);

let date2 = new Date(2023, 0, 23);
console.log(date2.toDateString());

let date3 = new Date(2023, 0, 23, 5, 3);
console.log(date3.toLocaleString())

let date4 = new Date("2023-03-23");
console.log(date4.toLocaleString());

date4 = new Date("12-03-2014");
console.log(date4.toLocaleString());

let timestamp = Date.now();// milliseconds from 01 jan 1970 till now
console.log(timestamp);
console.log(date4.getTime())//milliseconds of particular date from a fixed date - 01 jan 1970
console.log(Math.floor(Date.now()/1000));

let date5 = new Date();
console.log(date5);
console.log(date5.getMonth());
console.log(date5.getDay());

console.log(`todaysis ${(date5.getDay())} th day of week`);

//comparing dates
date1 = new Date("12-03-2023")
date2 = new Date("13-03-2023")

if(date1>date2){
    console.log(`date1 is greater`)
}else{
    console.log(`date2 is greater`)
}

//other way--using getTime method
if(date1.getTime()>date2.getTime()){
    console.log(`date1 is greater`)
}else{
    console.log(`date2 is greater`)
}
