$(document).ready(function(){

	var data = [1,2,3,4,5,6,7,8,9,10];
	var randomIndex = Math.floor(Math.random() * data.length);
	var nextRandomIndex = Math.floor(Math.random() * data.length);
	function recurseThis(num1, num2, arr){
		console.log("num1: " + num1);
		console.log("num2: " + num2);
		if(num1 == num1){
			num1 = Math.floor(Math.random() * arr.length);
			recurseThis(num1, num2);
		}
		return num1;
	}

	//console.log(recurseThis(randomIndex, nextRandomIndex, data));
	var num = 0;
	var currentIndex = 0;
	function addAllNumbers(){
		if(currentIndex <= data.length - 1){
			num += data[currentIndex]
			currentIndex++;
			addAllNumbers();
		}
		// return num;
	}

	addAllNumbers();
	console.log(num);

});