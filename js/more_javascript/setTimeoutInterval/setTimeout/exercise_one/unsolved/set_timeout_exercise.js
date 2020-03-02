$(document).ready(function(){

	// hide the button
	$("#button").hide();

	// After 3 seconds, show the button
	setTimeout(function(){
		$("#button").show();
	}, 3000)

	// When the button is clicked
	// After 6 seconds, add a p tag to the div
	$("#button").on('click', function(){
		setTimeout(function(){
			$("#add-to-me").append($("<p>").text("whatever"))	
		}, 6000)
	});

});