//SCORES
const player0 = document.querySelector(".player--0");
const player1 = document.querySelector(".player--1");

const score0 = document.querySelector("#score--0");
const score1 = document.querySelector("#score--1");
const currentScore1 = document.getElementById("current--0");
const currentScore2 = document.getElementById("current--1");

//SCORES AND PLAYER ASSIGNEMENT
let dynamicScore = 0;
const scores = [0, 0];
let activePlayer = 0;
let playing = true;

//IMAGE
const diceImage = document.querySelector(".dice");
//BUTTONS
const btnNew = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");

//FUNCTION
const switchPlayer = function () {
  document.getElementById("current--" + activePlayer).textContent = 0;
  dynamicScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0.classList.toggle("player--active");
  player1.classList.toggle("player--active");
};

//RANDOM NUMBER - BUTTON + IMAGE UPDATE
btnRoll.addEventListener("click", function () {
  if (playing) {
    //RANDOM NUMBER
    const diceNumber = Math.trunc(Math.random() * 6 + 1);
    //SELECT DICE
    diceImage.src = "dice-" + diceNumber + ".png";
    //SHOW DICE
    diceImage.classList.remove("hidden");
    //ADD TO THE SCORE
    if (diceNumber !== 1) {
      dynamicScore = dynamicScore + diceNumber;
      document.getElementById("current--" + activePlayer).textContent =
        dynamicScore;
    } else {
      switchPlayer();
    }
  }
});

//HOLD

btnHold.addEventListener("click", function () {
  if (playing) {
    scores[activePlayer] = scores[activePlayer] + dynamicScore;

    document.getElementById("score--" + activePlayer).textContent =
      scores[activePlayer];

    if (scores[activePlayer] >= 10) {
      playing = false;
      diceImage.classList.add("hidden");
      document
        .querySelector(".player--" + activePlayer)
        .classList.add("player--winner");
      document
        .querySelector(".player--" + activePlayer)
        .classList.remove("player--active");
    } else {
      switchPlayer();
    }
  }
});

const newGame = document.querySelector(".btn--new");

newGame.addEventListener("click", function () {
  location.reload();
});
