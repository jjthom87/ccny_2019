/*

Scope/DOM/Event Mini Challenges - approx 4 hours
Goal:

Demonstrate understanding of DOM manipulation and events. Build familiarity with JS syntax.

Assignment:

Complete and submit the following three exercises to go over JavaScript event binding:

1. Create an HTML page with two buttons that argue with each other. 
   When one button is clicked, the text "I'm right" should be placed next to it. 
   When the other button is clicked, the text is replaced with, "No, I'm right!"
2. Create an HTML page with a large element on the page that says "Don't hover over me" inside of it. 
   When you hover over the element, send an alert to the user that says, "Hey, I told you not to hover over me!"
3. Create an HTML page with javascript that listens for a keypress.
4. When the user presses that key, the text of the H1 should show the value of the key they have pressed.
5. Create an HTML page with a form. 
   The form should include inputs for a username, email, and password as well as a submit button.
6. In a Javascript file, write code that does the following things:
	 - checks that the password is 12345678
	 - checks that the username contains at least one number
	 - if anything is wrong, send an alert message saying "incorrect"
7. Your page should also include an H1 tag. 
   If the information in the form is correct, have Javascript change the text in the H1.

*/

//1
document.getElementById("button-one").onclick = function(){
	document.getElementById("p-tag").innerHTML = "<p>I'm Right</p>"
}

document.getElementById("button-two").onclick = function(){
	document.getElementById("p-tag").innerHTML = "<p>No, I'm Right</p>"
}

//2
document.getElementsByTagName("h1")[1].onmouseover = function(){
	//alert("Hey, I told you not to hover over me!")
}

//3 & 4
document.onkeypress = function(e){
	document.getElementsByClassName("key-me")[0].innerText = e.key
}

// var num = 0;
// document.getElementById("username-input").onkeypress = function(e){
// 	num++;
// 	if(num > 8){
// 		alert("username can not be greater than 8 characters")
// 		document.getElementById("username-input").value = "";
// 		num = 0;
// 	}
// }

//5
document.getElementsByTagName("form")[0].onsubmit = function(event){
	event.preventDefault();

	let username = document.getElementById("username-input").value
	let email = document.getElementById("email-input").value
	let password = document.getElementById("password-input").value

	var numbersInString = 0;
	if(username.indexOf("1") > -1){
		numbersInString = numbersInString + 1
	} else if (username.indexOf("2") > -1){
		numbersInString++
	} else if (username.indexOf("3") > -1){
		numbersInString++
	} else if (username.indexOf("4") > -1){
		numbersInString++
	} else if (username.indexOf("5") > -1){
		numbersInString++
	} else if (username.indexOf("6") > -1){
		numbersInString++
	} else if (username.indexOf("7") > -1){
		numbersInString++
	} else if (username.indexOf("8") > -1){
		numbersInString++
	} else if (username.indexOf("9") > -1){
		numbersInString++
	}


	if(parseInt(password) == 12345678 && numbersInString > 0){
		document.getElementById("h1-form").innerText = "Form submitted correctly"
	}
	// if(username.length > 8){
	// 	alert("username can not be greater than 8 characters")
	// } else {
	// 	var inputObject = {
	// 		username: username,
	// 		email: email,
	// 		password: password
	// 	}
		

	// }





}