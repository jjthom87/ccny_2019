$(document).ready(function(){
	//Get Selected Gender in jquery: https://stackoverflow.com/questions/10659097/jquery-get-selected-option-from-dropdown
	//Add to table in jquery: https://stackoverflow.com/questions/171027/add-table-row-in-jquery
	$("#student-form").on('submit', function(e){
		e.preventDefault();

		var name = $('#name-input').val();
		var age = $('#age-input').val();
		var gender = $('#gender-select').val();

		var student = {
			name: name,
			age: age,
			gender: gender
		}

		var tr = $('<tr>');
		var nameTd = $("<td>");
		var ageTd = $("<td>");
		var genderTd = $("<td>");

		nameTd.text(student.name);
		ageTd.text(student.age);
		genderTd.text(student.gender);

		tr.append(nameTd).append(ageTd).append(genderTd);
		$('table').append(tr);
	})
});