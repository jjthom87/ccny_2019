/*
	1. Make an array of words
	2. Randomize a word and store it in a variable
	3. Create a string that turns every letter in that random word to underscores ("_")
		- hint: use a "" string, a loop, and +=
	4. Append the underscores to the dom
	5. Create a variable called guesses that is equal to 5 in the global scope and append it to the dom
	6. Create a variable that splits the underscore string in the global scope
	7. Create a keypress function on the document
	8. When a key is pressed
		- if the key pressed is inside the random word
		- re-assign the value of the index in the split underscore with the key pressed
		- loop here just in case that letter is in the word twice
		- append that new value to the dom outside of the loop

		- if the key pressed is not inside the random word
		- decrement guesses, append that to the dom
		- if guesses is at 0
		- alert them that they lost
		- re-assign the random word value
		- re-assign the underscore string and append that to the dom
		- re-assign guesses back to 5 and append that to the dom
		- re-assign the split underscore

		- if there are no more underscores in the split string
		- alert them that they won
		- re-assign the random word value
		- re-assign the underscore string and append that to the dom
		- re-assign guesses back to 5 and append that to the dom
		- re-assign the split underscore
*/
var words = ['elephant', 'giraffe', 'zebra', 'owl', 'bat', 'hawk', 'falcon', 'tiger', 'lion', 'bobcat'];
var randomWord = words[Math.floor(Math.random() * words.length)];

var randomWordUnderscoreString = ""
for(var i = 0; i < randomWord.length; i++){
	randomWordUnderscoreString += "_ "
}
var splitRandomWord = randomWordUnderscoreString.split(" ");
console.log(splitRandomWord)

var guesses = 5;
document.getElementById("guesses_left").innerText = guesses;

document.getElementById("random-word").innerText = randomWordUnderscoreString

document.onkeypress = function(e){
	if(randomWord.indexOf(e.key) > -1){
		for(var i = 0; i < randomWord.length; i++){
			if(randomWord[i] === e.key){
				splitRandomWord[i] = e.key;
			}
		}
		document.getElementById("random-word").innerText = splitRandomWord.join(" ")
	} else {
		guesses--;
		document.getElementById("guesses_left").innerText = guesses;
		if(guesses == 0){
			alert("You Lose");
			reset();
		}
	}
	if(splitRandomWord.indexOf("_") == -1){
		alert("You Win");
		reset();	
	}
}

function reset(){
	randomWord = words[Math.floor(Math.random() * words.length)];
	randomWordUnderscoreString = ""
	for(var i = 0; i < randomWord.length; i++){
		randomWordUnderscoreString += "_ "
	}
	document.getElementById("random-word").innerText = randomWordUnderscoreString

	guesses = 5;
	document.getElementById("guesses_left").innerText = guesses;

	splitRandomWord = randomWordUnderscoreString.split(" ");
}