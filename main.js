//constants-DOM elements

const buttons = document.querySelectorAll('button');
const gameDiv = document.getElementById('gameContainer');
const player = document.getElementById('player-selection');
const computer = document.getElementById('comp-selection');
const playerS = document.getElementById('score1');
const compS = document.getElementById('score2');
const winner = document.getElementById('winner');
const roundResults = document.getElementById('round-results');
const restart = document.createElement('button');

let playerScore=0;
let computerScore=0;
let playerSelection=''
let computerSelection=''

function computerPlay(){
    let choices = ['rock','paper','scissors'];
    return choices[Math.floor(Math.random()*choices.length)]
}

//console.log(computerPlay())

function playRound(playerSelection, computerSelection){
    if (playerSelection == 'rock' && computerSelection=='scissors'||
    playerSelection=='paper'&& computerSelection=='rock'||
    playerSelection=='scissors' && computerSelection=='paper')
  {
    return 1;//player wins
  }else if(playerSelection == 'rock'&& computerSelection=='paper'||
        playerSelection=='paper'&& computerSelection=='scissors'||
        playerSelection=='scissors'&& computerSelection=='rock')
  {
    
    return 2;//computer wins
  }else{
    return  0;
  }
}

function endGame(){
    buttons.forEach(button => button.setAttribute('disabled',''))
    restart.textContent = 'Start New Game';
    gameDiv.appendChild(restart);
    restart.addEventListener('click',(e)=>{
        e.preventDefault();
        newGame()
    })
}

function newGame(){
    buttons.forEach(button => button.removeAttribute('disabled'));
    playerScore=0;
    computerScore=0;
    playerSelection='';
    computerSelection='';
    player.innerHTML = '';
    computer.innerHTML = '';
    roundResults.innerHTML = '';
    playerS.innerHTML = '';
    compS.innerHTML = '';
    winner.innerHTML = '';
    gameDiv.removeChild(restart);
}

function game(){
    buttons.forEach(function(button){
        button.addEventListener('click',(e)=>{

        let playerSelection = button.id;
        let computerSelection = computerPlay();

        if(playRound(playerSelection, computerSelection) == 0){
        player.innerHTML = '';
        player.innerHTML = playerSelection.toUpperCase();
        computer.innerHTML = '';
        computer.innerHTML = computerSelection.toUpperCase();
        roundResults.innerHTML = '';
        roundResults.innerHTML = 'No one, it\'s a draw';
    }else if(playRound(playerSelection,computerSelection)== 1){
        player.innerHTML = '';
        player.innerHTML = playerSelection.toUpperCase();
        computer.innerHTML = '';
        computer.innerHTML = computerSelection.toUpperCase();
        roundResults.innerHTML = '';
        roundResults.innerHTML = 'The Player.';
        playerScore++;
    }else{
        player.innerHTML = '';
        player.innerHTML = playerSelection.toUpperCase();
        computer.innerHTML = '';
        computer.innerHTML = computerSelection.toUpperCase();
        roundResults.innerHTML = '';
        roundResults.innerHTML = 'The Computer';
        computerScore++;
    }
    playerS.innerHTML = '';
    playerS.innerHTML=`${playerScore}  `;
    compS.innerHTML = '';
    compS.innerHTML = `${computerScore}  `;

    if(playerScore === 5){
        winner.innerHTML = '';
        winner.innerHTML= 'The Player!!';
        endGame()         
    }else if(computerScore === 5 ){
        winner.innerHTML = '';
        winner.innerHTML = 'The Computer!!';
        endGame();
    };

    });
});
};
game()

