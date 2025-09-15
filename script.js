function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++) {
        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
    }

    if (humanScore > computerScore) {
        console.log('You win against the computer!!');
    } else if (humanScore < computerScore) {
        console.log('You lose to the computer!! :( LMAOOOOO');
    } else {
        console.log('Somehow u tied a best of 5 for this, so good on you I guess. I mean u didn\'t lose.');
    }

    function playRound(humanChoice, computerChoice) {
        if (humanChoice == computerChoice) {
            console.log('Tie! Nobody wins!');
        } else {
            if (humanChoice == 'rock') {
                if (computerChoice == 'paper') {
                    console.log('You lose!');
                    computerScore++;
                } else {
                    console.log('You win');
                    humanScore++;
                }
            } else if (humanChoice == 'paper') {
                if (computerChoice == 'rock') {
                    console.log('You win!');
                    humanScore++;
                } else {
                    console.log('You Lose!');
                    computerScore++;
                }
            } else if (humanChoice == 'scissors') {
                if (computerChoice == 'paper') {
                    console.log('You win!');
                    humanScore++;
                } else {
                    console.log('You lose!');
                    computerScore++;
                }
            } else {
                console.log('Not a valid option! You lose!');
                computerScore++;
            }
        }
    }

    function getComputerChoice() {
        const randNum = Math.floor((Math.random() * 3) + 1);
        if (randNum == 1) {
            return 'paper';
        } else if (randNum == 2) {
            return 'rock';
        } else {
            return 'scissors';
        }
    }

    function getHumanChoice() {
        const choice = prompt("What is your choice?");
        return choice.toLowerCase();
    }
}