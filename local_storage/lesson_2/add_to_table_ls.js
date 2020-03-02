$(document).ready(function(){

	//localStorage.removeItem("tableArr");

	var loadTable = () => {
		$('#table-to-add-to > tbody').empty();

		var table_arr;

		if(localStorage.tableArr){
			table_arr = localStorage.tableArr.indexOf(",") > -1 ? localStorage.tableArr.split(",") : localStorage.tableArr.split();
		}
		if(localStorage.tableArr){
			table_arr.forEach((a) => {
				var tr = $("<tr>");
				var td = $("<td>").text(a);
				tr.append(td);
				$("#table-to-add-to").append(tr);
			})
		}
		return table_arr;
	}

	$("#click-to-add").on('click', function(){

		var inputVal = $("#add-input").val();

		if(localStorage.tableArr){
			var newArr = loadTable();
			newArr.push(inputVal);
			localStorage.tableArr = newArr;
			loadTable();
		} else {
			localStorage.tableArr = inputVal;
			loadTable();
		}
	});

	loadTable();

});