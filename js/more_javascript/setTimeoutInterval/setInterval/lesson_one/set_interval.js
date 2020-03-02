$(document).ready(function(){

	//every 2 seconds, do this

	var num = 0
	var interval = setInterval(function(){
		num++
		console.log("every 2 seconds, do this")

		//stop the interval once the num gets to 5
		if(num >= 5){
			clearInterval(interval)
		}
	}, 2000)

});