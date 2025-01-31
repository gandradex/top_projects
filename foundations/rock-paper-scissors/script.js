let randomNumber;
let computerChoice;
let input;
let humanChoice;
let humanScore = 0;
let computerScore = 0;
let count = 1;
const c_paper = "PAPER";
const c_rock = "ROCK"
const c_scissors = "SCISSORS";

const buttons = document.querySelector(".buttons").querySelectorAll("button");
const results = document.querySelector("#results");
const endgame = document.querySelector("#endgame");

buttons.forEach(button => {
    button.addEventListener("click", (e) => {
        switch (e.target.id.toUpperCase()) {
            case c_rock:
                humanChoice = c_rock;
                break;
            case c_paper:
                humanChoice = c_paper;
                break;
            case c_scissors:
                humanChoice = c_scissors;
                break;
        }
        buttonClicked(humanChoice)
    })
});


// function for get computer choice
// using the math.radom we going select rock paper scissor
// if math.random is 0 to 1/3 then computerChoice == rock
// if math.random is 1/3 to 2/3 then computerChoice == paper
// if math.random is 2/3 to 1 then computerChoice == scissor

function getComputerChoice() {
    randomNumber = Math.random();
    if (randomNumber <= 1 / 3) {
        return c_rock;
    } else if (randomNumber >= 1 / 3 && randomNumber <= 2 / 3) {
        return c_paper;
    } else {
        return c_scissors;
    }
}

// function for get human choice
// using the prompt we going get user input
// after get input then we going to convert the string to uppercase.

function getHumanChoice() {
    input = prompt("Please enter your choice(rock, paper, scissors) : ").toUpperCase();
    if (input == c_rock || input == c_paper || input == c_scissors) {
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
        results.textContent = `Round ${count} Tie!, Your choice ${humanChoice} Computer choice ${computerChoice}.`;
    }
    else if ((computerChoice == c_rock && humanChoice == c_scissors) || (computerChoice == c_paper && humanChoice == c_rock) || (computerChoice == c_scissors && humanChoice == c_paper)) {
        computerScore++;
        results.textContent = `Round ${count} Computer Wins!, Your choice ${humanChoice} Computer choice ${computerChoice}.`;

    }
    else {
        humanScore++;
        results.textContent = `Round ${count} Human Wins!, Your choice ${humanChoice} Computer choice ${computerChoice}.`;
    }
}

function buttonClicked(humanChoice) {
    var result;

    results.textContent = "";
    endgame.textContent = "";
    computerChoice = getComputerChoice();
    playRound(computerChoice, humanChoice);

    if (count < 5) {
        count++;
    } else {
        if (computerScore == humanScore) {
            result = `\nGame over! It's a tie. Computer score: ${computerScore}, Your score: ${humanScore}`;
        } else if (computerScore > humanScore) {
            result = `\nGame over! Computer wins. Computer score: ${computerScore}, Your score: ${humanScore}`;
        } else {
            result = `\nGame over! You win! Computer score: ${computerScore}, Your score: ${humanScore}`;
        }
        endgame.textContent = result;
        count = 1;
    }
}

// function playGame() {
//     var result;
//     if (count <= 5) {
//         console.log(`\nStarting Round ${count}:`);
//         computerChoice = getComputerChoice();
//         humanChoice = getHumanChoice();
//         playRound(computerChoice, humanChoice);
//         count++;
//         playGame();
//     } else {
//         if (computerScore == humanScore) {
//             result = `\nGame over! It's a tie. Computer score: ${computerScore}, Your score: ${humanScore}`;
//         } else if (computerScore > humanScore) {
//             result = `\nGame over! Computer wins. Computer score: ${computerScore}, Your score: ${humanScore}`;
//         } else {
//             result = `\nGame over! You win! Computer score: ${computerScore}, Your score: ${humanScore}`;
//         }
//         console.log(result);
//         alert(result);
//     }
// }

//playGame()