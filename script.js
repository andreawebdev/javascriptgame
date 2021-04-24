'use strict';
let myAge = Math.trunc(Math.random() * 44) + 1;
// let myAge = 10;


let score = 5;




document.querySelector('.myBotton').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  

  
  if (!guess) {
    document.querySelector('.message').textContent = '⛔️ Please insert a number between 25 and 55!';

   } 
  else if (guess === myAge) {
    document.querySelector(".message").textContent =
      "🎉 Correct Number!You won!";


    document.querySelector("body").style.backgroundColor="rgb(95,24,23)";
    document.querySelector("audio").play()
  
 
 
  } else if (guess < 0) {
    document.querySelector(".message").textContent = "Game Over!";
  } else if (guess > 55) {
    document.querySelector(".message").textContent =
      "⛔️ Number too High! Please insert a number between 25 and 45!";
  } else if (guess < 25) {
    document.querySelector(".message").textContent =
      "⛔️ Number too low! Please insert a number between 25 and 45!";
  } else if (guess !== myAge) {
    if (score > 1) {
      document.querySelector(".message").textContent = "💥 Wrong Number!";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "Game Over!";
       document.querySelector("#gameover").play();
        document.querySelector("body").style.backgroundColor = "rgb(150,24,23)";
    }
  }


});




