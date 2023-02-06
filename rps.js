function getComputerChoice(){
    //generate a random number from 0 to 2
    let computerNumber = Math.floor(Math.random() * 3);

    //use random number to determine computer's move
    switch(computerNumber){
        case 0: 
            return "Rock";
            break;
        case 1:
            return "Paper";
            break;
        case 2:
            return "Scissors";
            break;        
    }
}

function getPlayerChoice(){
    let validChoice = 0;

    while(!validChoice){
        let playerMove = prompt("Enter your move: Rock, Paper, or Scissors")
    
        //format answer to make first letter capital and rest lowercase
        let playerMoveLowerCase = playerMove.toLowerCase();
        let nonCapitalLetters = playerMoveLowerCase.slice(1);
        let firstLetterCapital = playerMoveLowerCase[0].toUpperCase();
        let finalPlayerMove = firstLetterCapital+nonCapitalLetters;

        //check if valid move was entered
        if (finalPlayerMove == 'Rock' || finalPlayerMove == 'Paper' || finalPlayerMove == 'Scissors'){
            validChoice = 1;
            return finalPlayerMove;
        }
    }   
}

function playRound(playerSelection, computerSelection){
    const computerPlayed = document.createElement('p');
    computerPlayed.textContent = "Computer played " + computerSelection;
    document.body.appendChild(computerPlayed);

    const result = document.createElement('p');

    if (playerSelection == computerSelection){
        result.textContent = "It's a tie!";
        document.body.appendChild(result);
        return "Tie";
    }
    else if (playerSelection == 'Rock'){
        if (computerSelection == 'Scissors'){
            result.textContent = "You win!";
            document.body.appendChild(result);
            return "Player";
        }
        else{
            result.textContent = "Computer wins!";
            document.body.appendChild(result);
            return "Computer";
        }
    }
    else if (playerSelection == 'Paper'){
        if (computerSelection == 'Rock'){
            result.textContent = "You win!";
            document.body.appendChild(result);
            return "Player";
        }
        else{
            result.textContent = "Computer wins!";
            document.body.appendChild(result);
            return "Computer";
        }
    }
    else{
        if (computerSelection == 'Paper'){
            result.textContent = "You win!";
            document.body.appendChild(result);
            return "Player";
        }
        else{
            result.textContent = "Computer wins!";
            document.body.appendChild(result);
            return "Computer";
        }
    } 

}

function playGame(){
    let playerWins = 0;
    let computerWins = 0;

    while(playerWins < 3 && computerWins < 3){
        const playerSelection = getPlayerChoice();
        console.log(playerSelection);

        const computerSelection = getComputerChoice();
        console.log(computerSelection);

        let roundWinner = playRound(playerSelection, computerSelection);

        if (roundWinner == 'Player'){
            playerWins++
        }
        //need else if, not just else, because of ties
        else if (roundWinner == 'Computer'){
            computerWins++
        }
    }

    if (playerWins == 3){
        console.log("You won the game!")
    }
    else{
        console.log("You lost the game.")
    }
}

//Using the buttons to choose move and trigger playRound
const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click',() => {
        const playerMove = button.id;
        playRound(playerMove, getComputerChoice());
    })
})