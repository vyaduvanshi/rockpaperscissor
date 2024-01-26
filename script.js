function getComputerChoice (){
    list = ['rock', 'paper', 'scissor'];
    return list[Math.floor(Math.random()*3)];
}

function playRound(playerSelection, computerSelection){
    playerSelection = playerSelection.toLowerCase()

    if (computerSelection === playerSelection){
        return 0;
    }
    if ((computerSelection === 'rock') && (playerSelection === 'paper')){
        return 1;
    }
    if ((computerSelection === 'scissor') && (playerSelection === 'rock')){
        return 1;
    }
    if ((computerSelection === 'paper') && (playerSelection === 'scissor')){
        return 1;
    }
    else{
        return -1;
    }
}


function game(){
    let totalScore = 0;
    for (let i=0; i<5; i++){

        console.log(`Score till now: ${totalScore}`)
        let computerSelection = getComputerChoice();
        let playerSelection = prompt("Make your choice:");

        retValue = playRound(playerSelection, computerSelection);

        // Draw
        if (retValue == 0){
            console.log("Tie.Playing round again.");
            i -= 1;
        }
        else{
            totalScore += retValue;
            (retValue === 1) ? console.log("You win this round")  : console.log("You lose this round");
        }
    }

    (totalScore < 3) ? console.log("You lose the game.") : console.log("You win the game.");

}

game()