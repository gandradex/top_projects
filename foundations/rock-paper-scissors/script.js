let randomNumber;
let computerChoice;
let input;
let humanChoice;
let humanScore = 0;
let computerScore = 0;
let count = 1;

// function for get computer choice
// using the math.radom we going select rock paper scissor
// if math.radom is 0 to 1/3 then computerChoice == rock
// if math.radom is 1/3 to 2/3 then computerChoice == paper
// if math.radom is 2/3 to 1 then computerChoice == scissor

function getComputerChoice() {
    randomNumber = Math.random();
    if (randomNumber <= 1 / 3) {
        return "ROCK";
    } else if (randomNumber >= 1 / 3 && randomNumber <= 2 / 3) {
        return "PAPER";
    } else {
        return "SCISSORS";
    }
}


// function for get human choice
// using the prompt we going get user input
// after get input then we going to convert the string to uppercase.

function getHumanChoice() {
    input = prompt("Please enter your choice(rock, paper, scissors) : ").toUpperCase();
    if (input == 'ROCK' || input == 'PAPER' || input == 'SCISSORS') {
        return input;
    } else {
        alert("Please type in a valid choice (rock, paper, or scissors)");
        getHumanChoice();
    }
}


// function for check the winner
// if the winner is human then the humanScore will be increase
// if the winner is computer then the computerScore will be increase

function playRound(computerChoice, humanChoice) {
    console.log(computerChoice);
    console.log(humanChoice);
    if (computerChoice == humanChoice) {
        console.log(`Round ${count} Tie!, Your choice ${humanChoice} Computer choice ${computerChoice}.`);
    }
    else if ((computerChoice == 'ROCK' && humanChoice == 'SCISSORS') || (computerChoice == 'PAPER' && humanChoice == 'ROCK') || (computerChoice == 'SCISSORS' && humanChoice == 'PAPER')) {
        computerScore++;
        console.log(`Round ${count} Computer Wins!, Your choice ${humanChoice} Computer choice ${computerChoice}.`);

    }
    else {
        humanScore++;
        console.log(`Round ${count} Human Wins!, Your choice ${humanChoice} Computer choice ${computerChoice}.`);
    }
}

function playGame() {
    var result;
    if (count <= 5) {
        console.log(`\nStarting Round ${count}:`);
        computerChoice = getComputerChoice();
        humanChoice = getHumanChoice();
        playRound(computerChoice, humanChoice);
        count++;
        playGame();
    } else {
        if (computerScore == humanScore) {
            result = `\nGame over! It's a tie. Computer score: ${computerScore}, Your score: ${humanScore}`;
        } else if (computerScore > humanScore) {
            result = `\nGame over! Computer wins. Computer score: ${computerScore}, Your score: ${humanScore}`;
        } else {
            result = `\nGame over! You win! Computer score: ${computerScore}, Your score: ${humanScore}`;
        }
        console.log(result);
        alert(result);
    }
}

playGame()