
let randomNumber = Math.floor((Math.random() * 6) + 1);

let randomImages = "images/dice" + randomNumber + ".png"; //random images

let img = document.querySelectorAll("img")[0].setAttribute("src", randomImages);

//for second dice
let randomNumber2 = Math.floor((Math.random() * 6) + 1);

let randomImages2 = "images/dice" + randomNumber2 + ".png";

let img2 = document.querySelectorAll("img")[1].setAttribute("src", randomImages2);

//statement
if (randomNumber > randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 1 wins🏆"
} 
else if(randomNumber2 > randomNumber) {
    document.querySelector("h1").innerHTML = "Player 2 wins🚩"
} else {
    document.querySelector("h1").innerHTML = "Draw!"
}