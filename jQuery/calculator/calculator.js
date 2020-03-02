$(document).ready(function(){

	$("#number-space").prop("disabled", true);

	var operator;

	var total = "";
	$(".num").click(function(){
		total += $(this).text()
		$("#number-space").val(total)
	});


	var preOperatorValue;
	$(".operator").click(function(){
		preOperatorValue = $('#number-space').val();
		operator = $(this).text();
		$('#number-space').val("");
		total = "";
	});

	$(".equal").click(function(){
		$('#number-space').val(doTheMath(operator, preOperatorValue, $('#number-space').val()))
	});

	$(".clear").click(function(){
		$('#number-space').val("");
		total = "";
		operator = "";
		preOperatorValue = "";
	});

	$('.positive-negative').click(function(){
		if(total.indexOf("-") == -1){
			total = "-" + total;
			$("#number-space").val(total);
		} else {
			total = total.substring(1, total.length)
			$("#number-space").val(total);
		}
	});

	$(".percentage").click(function(){
		total = total.substring(0, total.length-2) + "." + total.substring(total.length-2, total.length)
		$("#number-space").val(total);
	})

	function doTheMath(bingityabopbopboo, value1, value2){
		var returnValue;
		value1 = parseFloat(value1);
		value2 = parseFloat(value2);
		switch(bingityabopbopboo){
			case "+":
				returnValue = value1 + value2;
				break;
			case "-":
				returnValue = value1 - value2;
				break;
			case "/":
				returnValue = value1/value2;
				break;
			case "X":
				returnValue = value1 * value2;
				break;
		}
		return returnValue;
	}

});