let choices = ['rock', 'paper', 'scissors'];
let buttons = document.querySelectorAll('button');
let message = document.getElementById('message');
let userWins = document.getElementById('userWins');
let computerWins = document.getElementById('computerWins');
let ties = document.getElementById('ties');

let userWinCount = 0;
let computerWinCount = 0;
let tieCount = 0;

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        let userChoice = button.id;
        let computerChoice = choices[Math.floor(Math.random() * choices.length)];

        if (userChoice === computerChoice) {
            message.textContent = "It's a tie!";
            tieCount++;
            ties.textContent = "Ties: " + tieCount;
        } else if (
            (userChoice === 'rock' && computerChoice === 'scissors') ||
            (userChoice === 'scissors' && computerChoice === 'paper') ||
            (userChoice === 'paper' && computerChoice === 'rock')
        ) {
            message.textContent = "You win!";
            userWinCount++;
            userWins.textContent = "User wins: " + userWinCount;
        } else {
            message.textContent = "You lose!";
            computerWinCount++;
            computerWins.textContent = "Computer wins: " + computerWinCount;
        }
    });
});