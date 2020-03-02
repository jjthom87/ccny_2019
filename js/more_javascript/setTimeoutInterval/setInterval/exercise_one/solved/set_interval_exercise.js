$(document).ready(function(){

	var num = 100
	var interval;

	// append number to appropriate p tag
	$("#number").append(num)

	//when start is clicked, decrease number each second
	//remember to use interval across both on click functions
	$("#start-button").click(function(){
		interval = setInterval(function(){
			num--
			$("#number").empty();
			$("#number").append(num);
		}, 1000)
	});

	//when pause button is clicked, stop the timer
	$("#pause-button").click(function(){
		clearInterval(interval);
	});

	//when stop button is clicked, stop the timer
	$("#stop-button").click(function(){
		clearInterval(interval);
		num = 100;
		$("#number").empty();
		$("#number").append(num)
	});

});