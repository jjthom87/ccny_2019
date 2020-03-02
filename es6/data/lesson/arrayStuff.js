var animals = ['elephant', 'gorilla', 'giraffe', 'monkey', 'rhino', 'hippo'];
var numbers = [12, 13, 132, 5534, 49309, 1948, 101, 4001]

animals.forEach((animal, i) => {
	console.log("animal: " + animal);
	console.log("i: " + i);
});

console.log(animals.map((animal) => animal.indexOf('g') > -1));
console.log(animals.filter((animal) => animal.charAt(0) === "g"));
console.log(numbers.reduce((a,b) => a + b, 0))
