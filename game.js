// function that returns Rock, Scissors or Paper from computer
const rsp = ['Rock', 'Scissors', 'Paper'];

function computerPlay () {
    a = Math.floor(Math.random() * 3);
    return rsp[a]
}

//function that lets play a round of the game
function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.innerText;

    if (playerSelection === 'Rock' && computerSelection === 'Paper') {
        return 'You lose! Paper beats Rock';
    } else if (playerSelection === 'Scissors' && computerSelection === 'Paper') {
        return 'You win! Scissors beats Paper';
    } else if (playerSelection === 'Rock' && computerSelection === 'Scissors') {
        return 'You win! Rock beats Scissors';
    } else if (playerSelection === 'Paper' && computerSelection === 'Scissors') {
        return 'You lose! Scissors beats Paper';
    } else if (playerSelection === 'Paper' && computerSelection === 'Rock') {
        return 'You win! Paper beats Rock';
    } else if (playerSelection === 'Scissors' && computerSelection === 'Rock') {
        return 'You lose! Rock beats Scissors';
    } else if (playerSelection === computerSelection) {
        return 'We have a tie!';
    }
}

// the main game function
function game(playerSelection) {

    //display round result
    let rndResult = document.querySelector(".rndResult");
    rndResult.innerText = "Round result: ";
    
    //get choices from player and computer
    let computerSelection = computerPlay();
    let result = playRound(playerSelection, computerSelection);
    rndResult.innerText = rndResult.innerText + " " + result;

    //count and display the score
    if (playerPoints >= 5) {
        rndResult.innerText = `Reload the page to play again`;
        buttons.forEach(button => button.removeEventListener('click', () =>{
            game(button);
        }));
    } else if (computerPoints >= 5) {
        rndResult.innerText = `Reload the page to play again`;
        buttons.forEach(button => button.removeEventListener('click', () =>{
            game(button);
        }));
    } else {
        if (result.slice(0,7) === 'You win') {
            playerPoints++;
            humanScore.innerText = humanScore.innerText.replace(/\d/, playerPoints);
            if (playerPoints >= 5) rndResult.innerText = `You're a winner!`;
        } else if (result.slice(0,7) === 'You los') {
            computerPoints++
            pcScore.innerText = pcScore.innerText.replace(/\d/, computerPoints)
            if (computerPoints >= 5) rndResult.innerText = `You're a loser!`;
        }
    }
}

//set the initial score
let playerPoints = 0, computerPoints = 0;

let humanScore = document.querySelector('.humanScore');
let pcScore = document.querySelector('.pcScore');

humanScore.innerText = humanScore.innerText + " " + playerPoints;
pcScore.innerText = pcScore.innerText + " " + computerPoints;

//start a game with a click
let buttons = document.querySelectorAll("button");
buttons.forEach(button => button.addEventListener('click', () => {
    game(button);
}));