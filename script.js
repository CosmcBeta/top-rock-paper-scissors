let humanScore = 0;
let computerScore = 0;

const container = document.querySelector('.container')
const scissorsBtn = document.querySelector('.scissors');
const paperBtn = document.querySelector('.paper');
const rockBtn = document.querySelector('.rock');

scissorsBtn.addEventListener('click', () => playRound('scissors', getComputerChoice()));
paperBtn.addEventListener('click', () => playRound('paper', getComputerChoice()));
rockBtn.addEventListener('click', () => playRound('rock', getComputerChoice()));

const winnerDiv = document.createElement('div');

function playRound(humanChoice, computerChoice) {
    let winnerText = '';

    if (humanChoice == computerChoice) {
        winnerText = 'Tie! Nobody wins!';
    } else {
        if (humanChoice == 'rock') {
            if (computerChoice == 'paper') {
                winnerText = 'You lose!';
                computerScore++;
            } else {
                winnerText = 'You win';
                humanScore++;
            }
        } else if (humanChoice == 'paper') {
            if (computerChoice == 'rock') {
                winnerText = 'You win!';
                humanScore++;
            } else {
                winnerText = 'You Lose!';
                computerScore++;
            }
        } else if (humanChoice == 'scissors') {
            if (computerChoice == 'paper') {
                winnerText = 'You win!';
                humanScore++;
            } else {
                winnerText = 'You lose!';
                computerScore++;
            }
        } else {
            winnerText = 'Not a valid option! You lose!';
            computerScore++;
        }
    }
    const winner = checkWinner()
    if (winner !== null) {
        winnerText += winner;
    }
    
    winnerDiv.textContent = winnerText;
    winnerDiv.style.color = 'blue';
    container.appendChild(winnerDiv);
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

function checkWinner() {
    if (humanScore === 5) {
        return 'You win against the computer!!';
    } else if (computerScore === 5) {
        return 'You lose to the computer!! :( LMAOOOOO';
    } else {
        return null;
    }
}