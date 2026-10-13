#projects related to DOM

## project link
[click here](https://stackblitz.com/edit/stackblitz-starters-sqasfvq9?description=HTML/CSS/JS%20Starter&file=script.js,styles.css,index.html&terminalHeight=10&title=Static%20Starter)

# solution code
## project 1
## color changer 

```javascript
const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach(function(button){
    console.log(button);
    button.addEventListener('click', function(e){
        console.log(e);
        
        console.log(e.target);
        if(e.target.id === 'grey'){
            body.style.backgroundColor = e.target.id;
        }
        if(e.target.id === 'lightgreen'){
            body.style.backgroundColor = e.target.id;
        }
        if(e.target.id === 'yellow'){
            body.style.backgroundColor = e.target.id;
        }
        
        if(e.target.id === 'lightpurple'){
            body.style.backgroundColor = e.target.id;
        }
    });
});
```
