'use strict';

const players = {
    0: { score: 0, currentScore: 0, selector: document.querySelector('.player--0') },
    1: { score: 0, currentScore: 0,  selector: document.querySelector('.player--1') }
  }

let currentPlayer = 0 // Initialize to player 0
const allPlayers = document.querySelector('.player');  

const diceElement=document.querySelector('.dice');
const newButton=document.querySelector('.btn--new');
const holdButton=document.querySelector('.btn--hold');
const rollButton=document.querySelector('.btn--roll');



function diceRoll(){
    let roll = Math.floor(Math.random()*6)+1;
    diceElement.src=`dice-${roll}.png`;
    diceElement.classList.remove('hidden');
    return roll;
}

function updateScore(roll) {
    players[currentPlayer].score += roll;
    players[currentPlayer].selector.querySelector('.score').textContent = players[currentPlayer].score;
}
      



function changePlayer(){
    players[currentPlayer].score=0;//set turn score to 0
    updateScore(0);//update the GUI
    players[currentPlayer].selector.classList.remove('player--active') // Set active current player

    currentPlayer ^= 1; // Toggle between player 0 and 1
    
    players[currentPlayer].selector.classList.add('player--active') // Set active current player

}    

function checkRoll(roll){
    if (roll==1){
        changePlayer();
    }
    else {updateScore(roll);}

}


function storeScore(){
    players[currentPlayer].currentScore += players[currentPlayer].score;
    players[currentPlayer].selector.querySelector('.current-score').textContent = players[currentPlayer].currentScore

}



function resetGame(){   //reset game and make player 0 active
    Object.values(players).forEach(player => {
        player.score = 0;
        player.currentScore = 0;
        player.selector.querySelector('.score').textContent = 0;
        player.selector.querySelector('.current-score').textContent = 0;
       

      });
    players[0].selector.classList.add('player--active') // Set active current player
    players[1].selector.classList.remove('player--active') // Set active current player
    diceElement.classList.add('hidden');

}


rollButton.addEventListener('click', function() {
    if (players[currentPlayer].currentScore<100) {
        let roll = diceRoll();
        checkRoll(roll);
        }
    });
  
newButton.addEventListener('click', resetGame);

holdButton.addEventListener('click', function(){
    if(players[currentPlayer].currentScore<100){storeScore();}
    if(players[currentPlayer].currentScore>=100){
        alert(players[currentPlayer].selector.querySelector('.name').textContent + " won!");
    }
    else{
        changePlayer();
    }
})