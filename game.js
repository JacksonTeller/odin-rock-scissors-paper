// function that returns Rock, Scissors or Paper from computer
const rsp = ['Rock', 'Scissors', 'Paper'];

function computerPlay () {
    a = Math.floor(Math.random() * 3);
    return rsp[a]
}

//function that lets play a round of the game
function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.innerText;
    //playerSelection = playerSelection.toLowerCase();
    //computerSelection = computerSelection.toLowerCase();

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
    //let playerPoints
    let rndResult = document.querySelector(".rndResult");
    rndResult.innerText = "Round result:";
    

    //let playerSelection = prompt('Rock, Scissors or Paper?');
    let computerSelection = computerPlay();
    let result = playRound(playerSelection, computerSelection);
    rndResult.innerText = rndResult.innerText + " " + result;

    if (result.slice(0,7) === 'You win') {
        playerPoints++
    console.log(`You: ${playerPoints}\nComputer: ${computerPoints}`)
    } else if (result.slice(0,7) === 'You los') {
        computerPoints++
        console.log(`You: ${playerPoints}\nComputer: ${computerPoints}`)
    }
}
/*
let buttons = document.querySelectorAll("button");

buttons.forEach(button => button.addEventListener('click', () => {
    game(button);
}));
*/

let playerPoints = document.querySelector('.humanScore');





/*
buttons.forEach(button => button.addEventListener('click', () => {
    console.log(button.innerText)
} ));
*/

/*
let buttonR = document.querySelector('.r');

buttonR.addEventListener('click', playRound);
*/


console.log(playerPoints.innerText);

