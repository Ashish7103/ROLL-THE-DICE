'use strict';

//  selecting element
const player0 = document.querySelector('.player--0');
const player1 = document.querySelector('.player--1');
const score0 = document.querySelector('#score--0');

const score1 = document.querySelector('#score--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold ');
const current0 = document.querySelector('#current--0');

const current1 = document.querySelector('#current--1');

//  varible decleration
let scores,currentScore,activePlayer,playing;
//  Initialisation condition function
const init=function(){
   scores = [0, 0];
    currentScore = 0;
    activePlayer = 0;
   playing = true;


   diceEl.classList.add('hidden');
 
   score0.textContent = 0;
   score1.textContent = 0;
   current0.textContent = 0;
   current1.textContent = 0;
   document.querySelector(`.player--0`).classList.add('player--active');
   document.querySelector(`.player--1`).classList.remove('player--active');
   document.querySelector(`.player--0`).classList.remove('player--winner');
   document.querySelector(`.player--1`).classList.remove('player--winner');
 

 }
//   initially declare all variable to zero value
 init();

//  switch function
const switchPlayer = function () {
  //  switch to next player
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0.classList.toggle('player--active');
  player1.classList.toggle('player--active');
};

//  starting condition
score0.textContent = 0;
score1.textContent = 0;
diceEl.classList.add('hidden');

//  generating a random dice roll
btnRoll.addEventListener('click', function () {
  if (playing) {
    // 1. generating a random dice roll
    const dice = Math.trunc(Math.random() * 6) + 1;
    console.log(dice);

    // 2.display dice
    diceEl.classList.remove('hidden');
    diceEl.src = `/dice/dice-${dice}.png`;

    // 3.Check for rolled 1
    if (dice !== 1) {
      //  Add dice to current score
      currentScore += dice; //CHANGE LATER
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      //  switch to next player
      switchPlayer();
    }
  }
});

// ..........setting of hold button.........
btnHold.addEventListener('click', function () {
  if (playing) {
    // 1.Add curent score to active player score
    scores[activePlayer] += currentScore;
    //  score[1]=score[1]+currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    // 2.Check if player score is >=100
    if (scores[activePlayer] >= 20) {
      //  finish the game
      playing = false;
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
    } else {
      // 3.switch the next  player
      switchPlayer();
    }
  }
});

// ..... Resseting of page ......
btnNew.addEventListener('click', function () {
  init();

});
