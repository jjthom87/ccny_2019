function alertSomething(){
	alert("NYCDA");
}

alertSomething();

function alertText(text){
	alert("NYCDA " + text);
}

alertText("You're Still My Sunshine");

function addNumbers(num1, num2){
	return num1 + num2;
}

//why didn't add numbers show up in the console?

function multiplyNumbers(num1, num2){
	if(typeof num1 === "integer" && typeof num2 === "integer"){
		return num1 * num2;
	} else {
		alert("please only use numbers here")
	}
}

console.log(multiplyNumbers(5,5))