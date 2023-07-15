var randomNumber = Math.round(Math.random()*100);
var submitButton = document.getElementById("submit");
var message = document.getElementById("message");
var lives = document.getElementById("lives");
console.log(randomNumber);
var msg;
let s=10;

submitButton.onclick=() => {

    console.log();
    let inputNumber = document.getElementById("number-input").value;
    s--;
    if(inputNumber == randomNumber)
    {
        location.href="./win.html";
    }
    else if(inputNumber > randomNumber)
    {
        msg="Oops! Your Guess is High!";
    }
    else if(inputNumber < randomNumber)
    {
        msg="Oops! Your Guess is Low!";
    }
    if(s==1)
    {
            submitButton.onclick=() => {
            location.href = "./lose.html";
        }
    }
    
    message.style.display= "inherit";
    message.innerHTML= msg;
    lives.innerHTML=s,"lives";
}