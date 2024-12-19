console.log("hi");

const getUserChoice = function (userInput) {
  userInput = userInput.toLowerCase();
  if (
    userInput === "rock" ||
    userInput === "paper" ||
    userInput === "scissors" ||
    userInput === "bomb"
  ) {
    return userInput;
  } else {
    console.log("Error");
  }
};

function getComputerChoice() {
  let choice = Math.floor(Math.random() * 3);
  switch (choice) {
    case 0:
      return "rock";
    case 1:
      return "paper";
    case 2:
      return "scissors";
  }
}

function determineWinner(userChoice, computerChoice) {
  if (userChoice === computerChoice) {
    return "Tie";
  } else if (userChoice === "rock") {
    if (computerChoice === "paper") {
      return "Computer Won";
    } else {
      return "User Won";
    }
  } else if (userChoice === "paper") {
    if (computerChoice === "scissors") {
      return "Computer Won";
    } else {
      return "User Won";
    }
  } else if (userChoice === "scissors") {
    if (computerChoice === "rock") {
      return "Computer Won";
    } else {
      return "User Won";
    }
  } else if (userChoice === "bomb") {
    return "User Won";
  }
}

function playGame() {
  let userChoice = getUserChoice("bomb");
  let computerChoice = getComputerChoice();

  console.log(
    `User Choice : ${userChoice} - Computer Choice : ${computerChoice}`
  );

  console.log(determineWinner(userChoice, computerChoice));
}

playGame();
