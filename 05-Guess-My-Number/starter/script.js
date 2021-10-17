'use strict';

// console.log(document.querySelector(`.message`).textContent);
// document.querySelector(`.message`).textContent = `🎉 Correct Number!`;

// document.querySelector(`.number`).textContent = 13;
// document.querySelector(`.score`).textContent = 20;

// document.querySelector(`.guess`).value = 12;
// console.log(document.querySelector(`.guess`).value);

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = document.querySelector(`.score`).textContent;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector(`.message`).textContent = message;
};

const displaySecretNumber = function (secretNumber) {
  document.querySelector(`.number`).textContent = secretNumber;
};

const displayScore = function (score) {
  document.querySelector(`.score`).textContent = score;
};

const displayGuess = function (guess) {
  document.querySelector(`.guess`).value = guess;
};

const displayHighscore = function (highscore) {
  document.querySelector(`.highscore`).textContent = highscore;
};

document.querySelector(`.check`).addEventListener(`click`, function () {
  const guess = Number(document.querySelector(`.guess`).value);

  console.log(guess, typeof guess);

  if (!guess) {
    displayMessage(`🙄 Enter a number idiot`);
  } else if (guess === secretNumber) {
    displayMessage(`✅ Correct Number!`);
    document.querySelector(`body`).style.backgroundColor = `#60b347`;
    displaySecretNumber(secretNumber);
    document.querySelector(`.number`).style.width = `30rem`;

    if (score > highscore) {
      highscore = score;
      displayHighscore(highscore);
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(
        guess > secretNumber ? `🔻 Guess Lower!` : `🔺 Guess Higher!`
      );
      score--;
      displayScore(score);
    } else {
      displayMessage(`💥 You lost the game`);
      displayScore(0);
    }
  }
});

document.querySelector(`.again`).addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  displayMessage(`📝 Start guessing...`);
  displayScore(score);
  displayGuess(``);
  displaySecretNumber(`?`);
  document.querySelector(`body`).style.backgroundColor = `#222`;
  document.querySelector(`.number`).style.width = `15rem`;
});
