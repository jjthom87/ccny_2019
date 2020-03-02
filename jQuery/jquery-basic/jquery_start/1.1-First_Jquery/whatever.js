document.getElementById('hit').onchange = function(){
	console.log(this.value)
	console.log(this.options[this.selectedIndex].getAttribute("data-value"))
}