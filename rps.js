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
    let playerMove = prompt("Enter your move: Rock, Paper, or Scissors")
    
    playerMoveLowerCase = playerMove.toLowerCase();
    nonCapitalLetters = playerMoveLowerCase.slice(1);
    firstLetterCapital = playerMoveLowerCase[0].toUpperCase();
    finalPlayerMove = firstLetterCapital+nonCapitalLetters;

    if (finalPlayerMove != 'Rock' || finalPlayerMove != 'Paper' || finalPlayerMove != 'Scissors')

    //add if not rock paper or scissors, please enter valid move
    //keep prompting until valid
    return finalPlayerMove;
}

function playRound(playerSelection, computerSelection){
    if (playerSelection == computerSelection){
        console.log("It's a tie!")
    }
    else if (playerSelection == 'Rock'){
        if (computerSelection == 'Scissors'){
            console.log("You win!")
        }
        else{
            console.log("Computer wins!")
        }
    }
    else if (playerSelection == 'Paper'){
        if (computerSelection == 'Rock'){
            console.log("You win!")
        }
        else{
            console.log("Computer wins!")
        }
    }
    else{
        if (computerSelection == 'Paper'){
            console.log("You win!")
        }
        else{
            console.log("Computer wins!")
        }
    } 
}

const playerSelection = getPlayerChoice();
console.log(playerSelection);

const computerSelection = getComputerChoice();
console.log(computerSelection);

playRound(playerSelection, computerSelection);

