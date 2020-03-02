$(document).ready(function(){

	// hide the button
	$("#button").hide();

	// After 3 seconds, show the button
	setTimeout(function(){
		$("#button").show();
	}, 3000);

	// When the button is clicked
	// After 6 seconds, add a p tag to the div
	$("#button").click(function(){
		setTimeout(function(){
			var p = $("<p>");
			p.text("added");
			$("#add-to-me").append(p)
		}, 6000);
	});

});