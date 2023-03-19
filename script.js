// Get the buttons and result div
const rockButton = document.getElementById("rock");
const paperButton = document.getElementById("paper");
const scissorsButton = document.getElementById("scissors");
const resultDiv = document.getElementById("result");

// Add event listeners to the buttons
rockButton.addEventListener("click", playGame);
paperButton.addEventListener("click", playGame);
scissorsButton.addEventListener("click", playGame);

// Define the playGame function
function playGame(event) {
	// Get the player's choice
	const playerChoice = event.target.id;

	// Generate the computer's choice
	const choices = ["rock", "paper", "scissors"];
	const computerChoice = choices[Math.floor(Math.random() * choices.length)];

	// Determine the winner
	let result;
	if (playerChoice === "rock" && computerChoice === "scissors") {
		result = "You win!";
	} else if (playerChoice === "paper" && computerChoice === "rock") {
		result = "You win!";
	} else if (playerChoice === "scissors" && computerChoice === "paper") {
		result = "You win!";
	} else if (playerChoice === computerChoice) {
		result = "It's a tie!";
	} else {
		result = "You lose!";
	}

	// Display the result
	resultDiv.textContent = `You chose ${playerChoice}. Computer chose ${computerChoice}. ${result}`;
}