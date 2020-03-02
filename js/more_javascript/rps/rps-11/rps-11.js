document.getElementById("game-div").style.display = "none";
document.getElementById("spinner-loader").style.display = "none";

var wins = 0;
var losses = 0;
var ties = 0;

var playersGuesses = [];

var images = ["paper.jpeg", "rock.jpg", "scissors.jpg"];

var imageString = "";
for(var i = 0; i < images.length; i++){
	imageString += "<img class='rps-image' src="+images[i]+" height=200px width=200px style='padding: 15px;' choice="+images[i].split(".")[0]+" />"
}

document.getElementById("my_choices").innerHTML = imageString;

var computerGuessOptions = ["rock", "paper", "scissors"];
var randomComputerGuess = computerGuessOptions[Math.floor(Math.random() * computerGuessOptions.length)];

var usersWins = document.getElementById("wins_count");
var usersLosses = document.getElementById("losses_count");
var usersTies = document.getElementById("ties_count");

usersWins.innerText = wins;
usersLosses.innerText = losses;
usersTies.innerText = ties;

var userGuess;
document.body.onclick = function(e){

	if(e.target.className === "rps-image"){
		randomComputerGuess = computerGuessOptions[Math.floor(Math.random() * computerGuessOptions.length)];

		if(e.target.getAttribute("choice") === "paper"){
			userGuess = "paper"
			if(randomComputerGuess === "paper"){
				ties++;
			} else if (randomComputerGuess === "rock"){
				wins++;
			} else {
				losses++;
			}
		} else if (e.target.getAttribute("choice") === "rock")	{
			userGuess = "rock"
			if(randomComputerGuess === "rock"){
				ties++;
			} else if (randomComputerGuess === "scissors"){
				wins++;
			} else {
				losses++;
			}
		} else if (e.target.getAttribute("choice") === "scissors"){
			userGuess = "scissors"
			if(randomComputerGuess === "scissors"){
				ties++;
			} else if (randomComputerGuess === "paper"){
				wins++;
			} else {
				losses++;
			}
		}

		playersGuesses.push(userGuess);

		if(playersGuesses.length > 10){
			document.getElementById("players_guesses").innerText = playersGuesses.slice(playersGuesses.length - 10, playersGuesses.length);
		} else {
			document.getElementById("players_guesses").innerText = playersGuesses;
		}

		document.getElementById("my_guess").innerText = userGuess;
		document.getElementById("computer_Guess").innerText = randomComputerGuess;

		usersWins.innerText = wins;
		usersLosses.innerText = losses;
		usersTies.innerText = ties;
	} else if(e.target.className !== "rps-image" && e.target.id !== "start-game-button") {
		$(document).ready(function(){
			$('.toast').toast('show')
		})
	}

}

document.getElementById("start-game-button").onclick = function(){

	document.getElementById("start-game-button").style.display = "none";
	
	document.getElementById("spinner-loader").style.display = "inline-flex";

	setTimeout(function(){
		document.getElementById("spinner-loader").style.display = "none";
		document.getElementById("game-div").style.display = "contents";
	}, 5000)
}