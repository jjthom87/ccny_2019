/*

JS Basics Mini Challenges
Goal:

Demonstrate basic programming and JavaScript skills and understanding of objectives. Build familiarity with JavaScript syntax and conventions of basic programming.

Assignment:

1. Create a script with two variables, each assigned to a number. 
   Add them together and output the result to the console. 
   Now do the same with two strings.
2. Create a multidimensional array related to a subject that interests you. 
   Output two of the items in sub-arrays to the console.
3. Write a script that checks if a variable is less than 100. 
   If it is, alert the user that their variable is less than 100. 
   If it is not alert the user of what the value was and that it was greater than 100.
4. Declare a function that takes a name as an argument and tells the user what name they've entered. 
   Try running it after it has been declared.
5. Declare a function that depending upon which virtual 'door' was entered tells the user 
   they've received a different 'prize' in an alert. After declaring the function, 
   try running it with different options. There must be at least 3 doors.

*/

// //1
// var numOne = 99;
// var numTwo = 101;
// var sum = numOne + numTwo;
// console.log(sum)

// function addTwoIntegers(numberOne, numberTwo){
// 	return numberOne + numberTwo
// }

// var stringOne = "Hey";
// var stringTwo = "You";
// var sumOfStrings = stringOne + " " + stringTwo;
// console.log(sumOfStrings)

// //2
// var arr = [["the who", "the rolling stones"],["nirvana", "pearl jam"]];
// console.log(arr[0][0] + " " + arr[1][1])
// console.log(arr[1][1])

// //3
// function theHundredFunction(number){
// 	if(number < 100){
// 		alert("your number is less than 100");
// 	} else {
// 		alert("Your number " + number + " is greater than 100");
// 	}
// }
// theHundredFunction(numOne);
// theHundredFunction(numTwo);

// //4
// function promptUser(){
// 	var name = prompt("Type your name");
// 	alert("Your name is " + name);
// }
// promptUser();

//5
function magicDoor(){
	var door = prompt("What door would you like to choose?")
	console.log(door);
		if(door == 1){
			alert("You've won a lump of coal");
		} else if(door == 2) {
			alert("You've won a pony");
		} else if(door == 3){
			alert("You've won a tesla");
		} else {
			alert("Please enter 1, 2, or 3")
		}
	// }
}
magicDoor();

