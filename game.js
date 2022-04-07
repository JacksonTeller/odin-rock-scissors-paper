const rsp = ['Rock', 'Scissors', 'Paper'];

function computerPlay () {
    a = Math.floor(Math.random() * 3);
    return rsp[a]
}

console.log(computerPlay());

function playRound(playerSelection, computerSelection) {
    let playerSelection = playerSelection.toLowerCase();
    let computerSelection = computerSelection.toLowerCase();

    if (playerSelection === 'rock' && computerSelection === 'paper') {
        return 'You lose! Paper beats Rock'
    }
}
