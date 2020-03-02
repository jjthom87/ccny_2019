/*

From the array here, loop through, console.log all of the "Jareds" and replace the name "Jared" with the h2 tag
console.log all of the names that start with the letter "J"

*/

var classNames = ["Bianca", "Jared", "Jasmaine", "Jarvis", "Joel", "Nathan", "George", "Akintunde", "Tymel", "David", "PJ", "Mikael", "Jared"];

// ----------- Code Below -------------------

var string = "";
var arr = [];
for(var i = 0; i < classNames.length; i++){
	// if(classNames[i] === "Jared"){
	// 	// string += classNames[i] + " ";
	// 	// arr.push(classNames[i])
	// }
	if(classNames[i].indexOf("J") > -1){
		string += classNames[i];
		console.log(string);
	}
	arr.push(classNames[i])
}

console.log(arr)

arr.push("Jobin")
arr.push("Bob")

console.log(arr.length)
console.log(arr)

document.getElementsByTagName("h2")[0].innerText = arr.join(" ");