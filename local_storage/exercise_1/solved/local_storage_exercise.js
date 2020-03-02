/*

	1. Add an array to localStroage
	2. Add items to the array and save the array in localStorage
	3. Log the array in the console and google inspect

	4. Remove aardvark (splice) from the array and save to localStorage
*/

localStorage.setItem("primates", ["chimpanzee", "orangutan", "gorilla", "aardvark"]);

var primates = localStorage.getItem("primates").split(",");
primates.push("lemur")

localStorage.setItem("primates", primates);
console.log(localStorage.getItem("primates").split(","))

primates = localStorage.getItem("primates").split(",");
primates.forEach((primate, i) => {
	if(primate === "aardvark"){
		primates.splice(i, 1);
	}
})
console.log(primates)