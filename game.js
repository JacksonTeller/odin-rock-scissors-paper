const rsp = ['Rock', 'Scissors', 'Paper'];

function computerPlay () {
    a = Math.floor(Math.random() * 3);
    return rsp[a]
}

console.log(computerPlay());