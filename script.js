function getComputerChoice (){
    list = ['rock', 'paper', 'scissor'];
    return list[Math.floor(Math.random()*3)];
}


function setup (){

    const btn_list = document.querySelectorAll('button');
        
    for (btn of [...btn_list]) {
        btn.addEventListener('click', function() {
            playRound(this.textContent);
        })};
}


function playRound(playerSelection){


    let computerSelection = getComputerChoice();
    playerSelection = playerSelection.toLowerCase();

    playerScore = document.querySelector('.playerScore').textContent;
    computerScore = document.querySelector('.computerScore').textContent;

    let round_str = document.querySelector('div.round');
    
    if (playerScore >= 5){
        round_str.textContent = "You win the game.";
        return 0;
    }
    else if (computerScore >= 5){
        round_str.textContent = "Computer wins the game. Too bad so sad.";
        return 0;
    }

    
    
    // console.log(`You picked ${playerSelection}. Computer picked ${computerSelection}`);
    // console.log(computerSelection, playerSelection, computerSelection===playerSelection);
    if (computerSelection === playerSelection){
        round_str.textContent = 'It\'s a tie.';
    }
    else if ((computerSelection === 'rock') && (playerSelection === 'paper')){
        round_str.textContent = 'You win the round.';
        ++playerScore;
    }
    else if ((computerSelection === 'scissor') && (playerSelection === 'rock')){
        round_str.textContent = 'You win the round.';
        ++playerScore;
    }
    else if ((computerSelection === 'paper') && (playerSelection === 'scissors')){
        round_str.textContent = 'You win the round.';
        ++playerScore;
    }
    else{
        round_str.textContent = 'Computer wins the round.';
        ++computerScore;
    }

    const body = document.querySelector('body');
    body.appendChild(round_str);

    document.querySelector('.playerScore').textContent = playerScore;
    document.querySelector('.computerScore').textContent = computerScore;
}


function game(){
    
    setup();
    

    // (playerScore === 5) ? console.log("You win the game.") : console.log("You lose the game.");

}

game()