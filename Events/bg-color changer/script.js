//generate random color
const randomColor = function(){
    const hex = "0123456789ABCDEF";
    let color = '#';
    for(let i=0; i<6; i++){
        color += hex[Math.floor(Math.random()*16)]
    }
    return color
};
let intervalId;
console.log(Math.floor(Math.random()*16));
const startChangingColor = function(){
   if(!intervalId){
    intervalId = setInterval(changecolor,1000)
   }
    function changecolor(){
        document.body.style.backgroundColor = randomColor();
    };
};

const stopChangingColor = function(){
    clearInterval(intervalId);
    intervalId = null;
};
document.querySelector("#start").addEventListener
("click",startChangingColor);
document.querySelector("#stop").
addEventListener("click",stopChangingColor);