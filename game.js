// function that returns rock, scissors or paper from computer
const rsp = ['Rock', 'Scissors', 'Paper'];

function computerPlay () {
    a = Math.floor(Math.random() * 3);
    return rsp[a]
}

//function that lets play a round of the game
function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

    if (playerSelection === 'rock' && computerSelection === 'paper') {
        return 'You lose! Paper beats Rock';
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        return 'You win! Scissors beats Paper';
    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        return 'You win! Rock beats Scissors';
    } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        return 'You lose! Scissors beats Paper';
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        return 'You win! Paper beats Rock';
    } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        return 'You lose! Rock beats Scissors';
    } else if (playerSelection === computerSelection) {
        return 'We have a tie!';
    }
}

// the main game function
function game() {
    let playerPoints = 0, computerPoints = 0;
    
    let playerSelection = prompt('Rock, Scissors or Paper?');
    let computerSelection = computerPlay();
    let result = playRound(playerSelection, computerSelection);
    console.log(result);
    if (result.slice(0,7) === 'You win') {
        playerPoints++
    console.log(`You: ${playerPoints}\nComputer: ${computerPoints}`)
    } else if (result.slice(0,7) === 'You los') {
        computerPoints++
        console.log(`You: ${playerPoints}\nComputer: ${computerPoints}`)
    }
    
    (playerPoints > computerPoints) ? console.log('You win!') : console.log('You lose!')
}

game()