/*

1. Lets get some question and answers

*/

//telling my application that i want these html to not be displayed when the page first loads
//these lines represent how to access css with vanilla javascript
//document.getElementById('options-list').style.display = 'none';
$('#options-list').hide();

//setting up my variables for the application
var index = 0;
var correct = 0;
var incorrect = 0;

//setting up my array with objects, which represents my trivia game
var trivia = [
	{
		question: 'Who was the first person to land on the moon',
		options: ['neil armstrong', 'john smith', 'bob saget'],
		answer: 'neil armstrong'
	},
	{
		question: 'Who framed roger rabbit',
		options: ['joe', 'john', 'who cares'],
		answer: 'who cares'
	},
	{
		question: 'Who shot Biggie',
		options: ['tupac', 'suge knight', 'eazy e'],
		answer: 'suge knight'
	}
]

//wrote this function that displays the question and options for each question
//the reason i wrote this function is because i use this block of code a few times
//the reason why I have 'index' as an argument is because the value that I want for index changes
//as I contiue to run this method
function nextQuestion(index){
	//document.getElementById('question').innerHTML = "Question " + (index + 1) + ": " + trivia[index].question;
	$("#question").html("Question " + (index + 1) + ": " + trivia[index].question);

	//var options = "<ol>";
	var options = $("<ol>");
	for(var i = 0; i < trivia[index].options.length; i++){
		options.append($("<button>").addClass("choice-button").attr("value", trivia[index].options[i].split(" ").join("+")).text(trivia[index].options[i]))
		//options += "<button class='choice-button' value="+trivia[index].options[i].split(" ").join("+")+">" + trivia[index].options[i] + "</button>"
	}
	//document.getElementById('options-list').innerHTML = options + "</ol>"
	$("#options-list").html(options);
}

//telling my application that I want it to start on a 'keydown' event
//and when the spacebar is pressed --- e.key === " " is spacebar, check the console.log
//in here, im only saying what i want to happen when a key is pressed on the window
var spaceBarButtonPressed = false;
//document.addEventListener('keydown', function(e){
$(document).on('keypress', function(e){
	if(e.key === " " && !spaceBarButtonPressed){
		//saying that once the spacebar is pressed, i want html elements
		//to be displayed and some to be hidden
		//document.getElementById('options-list').style.display = 'block';
		$('#options-list').show();
		//document.getElementById('trivia').style.display = 'none';
		$('#trivia').hide();

		spaceBarButtonPressed = true;

		//calling my nextQuestion function here, and inserting 0 as my param because
		//i only want the first question and options displayed on keypress, if I insert 0,
		//then '0' acts as 'index', which is the argument in the function: nextQuestion(index)
		//look at what index does throughout the function, and that is how the 0 will act
		nextQuestion(0);
	}
})

var incorrectAnswersDiv = $("<div>");
//document.body.onclick = function(e){
$(document).on('click', '.choice-button', function(){
	//if(e.target.className = "choice-button"){
		//var answer = e.target.getAttribute("value");
		var answer = $(this).attr("value");
		if(answer.split("+").join(" ") === trivia[index].answer){
			correct++;
		} else {
			incorrectAnswersDiv.append($("<p>").text("Question " + (index + 1) + " answer is " + trivia[index].answer));
		}
		index++;
		if(index < trivia.length){
			nextQuestion(index);
		} else {
			//document.getElementById('options-list').style.display = "none";
			$("#options-list").hide();
			//document.getElementById('score').innerText = "Correct: " + correct;
			$("#score").text("Correct: " + correct);
			//document.getElementById('incorrect-answers').innerHTML = incorrectAnswers.join("");
			$("#incorrect-answers").append(incorrectAnswersDiv)
			$("#question").hide();
		}
	//}
})





