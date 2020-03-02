/*

change the dolphin to the whale, and make the whale larger

bonus:
1. Read This: https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_onkeydown_addeventlistener
2. create an on key press function
3. append the keys that are pressed to the dom

*/

var image = document.getElementsByTagName("img")[0];
image.src = "whale.jpeg";
image.height = 200;
image.width = 200;

image.onclick = function(){
	image.height = image.height + 10;
	image.width = image.width + 10;
	
	if(image.height == 250){
		var htmlImageString = "<img src='dolphin.jpeg'/>"
		document.getElementById("typed-words").innerHTML += htmlImageString;
	}
}

image.onmouseover = function(){
	image.height = image.height - 5;
	image.width = image.width - 5;

	if(image.height == 250){
		var htmlImageString = "<img src='dolphin.jpeg'/>"
		document.getElementById("typed-words").innerHTML += htmlImageString;
	}
}

var string = "";
document.addEventListener("keydown", function(event){


	if(string.indexOf("dog") > -1){
		string = "";
	}

	if(event.key === "Backspace"){
		string = string.slice(0, string.length - 1)
	} else if(event.key === "Tab") {
		var splitString = string.split("");
		string = splitString.splice(splitString.length, 0, "       ");
		console.log(string)
		string = splitString.join("")
		console.log(string)
	} else {
		string += event.key;
	}

	document.getElementById("typed-words").innerText = string;
})


var array = ["rock", "paper", "scissors"]
//console.log(array[Math.floor(Math.random() * array.length)])

var scissors = ["s", "c", "i", "s", "s", "o", "r", "s"]
var randomizeScissors = () => {
	scissors[Math.floor(Math.random() * scissors.length)] = scissors[Math.floor(Math.random() * scissors.length)]
}
randomizeScissors()
randomizeScissors()
console.log(scissors.join(""))






