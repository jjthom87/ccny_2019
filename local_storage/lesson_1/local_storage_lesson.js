/*

	https://www.w3schools.com/html/html5_webstorage.asp

*/

localStorage.string = "hey hey hey";
localStorage.arr = ["what", "up"];
localStorage.object = JSON.stringify({name: 'Jared', age: 21})
localStorage.object_array = [JSON.stringify({name: 'Jared', age: 21}),JSON.stringify({name: 'Bob', age: 30})]
localStorage.foo = "bar";

console.log(localStorage.string)
console.log(localStorage.arr.split(","))
console.log(JSON.parse(localStorage.object))
console.log(localStorage.foo)

localStorage.setItem("string", "aye oh");
localStorage.setItem("arr", ["how", "are", "you"]);
localStorage.setItem("object", JSON.stringify({name: 'Rick', age: 37}));
localStorage.setItem("object_array", [JSON.stringify({name: 'Rick', age: 37}),JSON.stringify({name: 'Bob', age: 30}),JSON.stringify({name: 'Bill', age: 32})]);
localStorage.setItem("foo", "bar");

console.log(localStorage.getItem("string"));
console.log(localStorage.getItem("foo"));
console.log(localStorage.getItem("arr").split(","));
console.log(JSON.parse(localStorage.getItem("object")));

var jsonString = "[" + localStorage.getItem("object_array") + "]";
console.log($.parseJSON(jsonString))
console.log(JSON.parse(jsonString))

localStorage.removeItem("foo");
console.log(localStorage.foo)