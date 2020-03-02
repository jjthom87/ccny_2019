/*

1. import jquery
2. start off your js with $(document).ready(function(){})...all code goes between the curly brackets
3. start off by hiding the image first
4. make the image appear after you click the appropriate button
5. make the backgound color of the h2 tag to change to blue on click
6. Bonus: Create a num variable and increment that number with the appropriate on click, 
          and append the change number to the dom
7. Another Bonus: Make num decrease with appropriate button

*/
$(document).ready(function(){
	$('img').eq(0).hide();

	$('button').eq(0).on('click', function(){
		$('img').eq(0).show();
	});

	$("h2").on('click', function(){
		$("h2").css("background-color", "blue")
	});

	var num = 0;

	$("#num-inc-button").on("click", function(){
		num++;
		$("span").eq(0).text(num);
	});

	$("#num-dec-button").on("click", function(){
		num--;
		$("span").eq(0).text(num);
	});
});