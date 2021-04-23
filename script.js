'use strict';



let myAge = Math.trunc(Math.random() * 44) + 1;


let score = 5;
// let highscore = 0;



document.querySelector('.myBotton').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  // console.log(guess, typeof guess);

  // When there is no input
  if (!guess) {
    document.querySelector('.message').textContent = '⛔️ Please insert a number between 25 and 55!';

   } 
  else if (guess === myAge) {
    document.querySelector(".message").textContent =
      "🎉 Correct Number!You won!";
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
    }
  }


});




