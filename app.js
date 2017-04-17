//Require module from basicCard.js & clozeCard.js
var flashcards = require("./flashcards.js"),

//Requiring questions external file
	questions = require("./questions"),

//Requiring inquirer package
	inquirer = require("inquirer"),

//Array holding the cloze questions list
	clozeQuestions = [];

//Looping through the cloze-deleted questions
for (var i = 0; i < questions.length; i++) {
	var quest = new flashcards.clozeCard(questions[i].full, questions[i].cloze);
	clozeQuestions.push(quest);
}

//Counters reflecting which question the user is on, questions answered correctly
//and questions answered incorrectly
var current = 0;
var correct = 0;
var incorrect = 0;

function Ask() {
	inquirer.prompt([
			{
				type: "input",
				message: clozeQuestions[current].partial + "Answer: ",
				name: "guess"
			}
	]).then(function (answers) {
			
		//Conditional to determine if questions has been answered correctly
		if (answers.guess.toLowerCase() === clozeQuestions[current].cloze.toLowerCase()) {
			console.log("Correct answer!");
			correct++;
		} else {
			console.log("Incorrect answer!");
			incorrect++;
		}

		//Display the correct answer
		console.log(clozeQuestions[current].full);
		console.log("--------");

		//Progress to next question
		if (current < clozeQuestions.length - 1) {
			current++;
			Ask();
		} else {
			console.log("Game Over!");
			console.log("Correct answer: " + correct);
			console.log("Incorrect answer: " + incorrect);

			//Prompt user to replay
			inquirer.prompt([
					{
						type: "confirm",
						message: "Replay?",
						name: "replay"
					}
			]).then(function (answers) {
				if (answers.replay) {
					//Reset counters
					current = 0;
					correct = 0;
					incorrect = 0;
					Ask();
				} else {
					console.log("Alright. Come play again later!");
				}
			})
		}
	})
};

//Calling the main play function once app.js runs
Ask();












