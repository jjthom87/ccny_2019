/*

From the inputs, add onto the respective div 'p' tags with your name and your username
i.e. Name: Jared

**the value from the input after on submit is... $('whatever').val() instead of document.getElementByWhatever('whatever').value

*/

$(document).ready(function(){
	$("#create-el-form").on('submit', function(e){
		e.preventDefault();

		var pForName = $("<p>").text("Name: " + $("#name").val());
		var pForUserName = $("<p>").text("Username: " + $("#username").val());

		$("#div-to-add-to").html(pForName).html(pForUserName)
	});
});