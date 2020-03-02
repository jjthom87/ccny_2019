// var arr = ["a", "b", "c"];
// arr.splice(arr.length-1,1);
// console.log(arr);

var total = "2094203948";
var totalSplit = total.split("");

totalSplit.splice(total.length-2, 0, ".").join("")

console.log(totalSplit.join(""))