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

