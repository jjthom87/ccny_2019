var string = "reverse me";

// var reversedString = string.reverse();
var reversedString = ""

for(var i = string.length - 1; i > -1; i--){
	reversedString += string[i];
}

console.log(reversedString)