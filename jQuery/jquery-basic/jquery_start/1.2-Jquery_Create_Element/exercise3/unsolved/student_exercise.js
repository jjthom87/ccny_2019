$(document).ready(function(){
	$('#student-form').on('submit', function(e){
		e.preventDefault();

		//Once form is submitted
		var name = $("#name-input").val(); /* store value of name input in this variable */
		var age = $("#age-input").val();/* store value of age input in this variable */
		var gender = $('#gender-select').val();/* store selected gender input in this variable - https://stackoverflow.com/questions/10659097/jquery-get-selected-option-from-dropdown */

		//creating a student object here
		var student = {
			name: name,
			age: age,
			gender: gender
		}

		var tr = $("<tr>");
		var nameTd = $("<td>")
		var ageTd = $("<td>")
		var genderTd = $("<td>")

		nameTd.text(student.name);
		ageTd.text(student.age);
		genderTd.text(student.gender);

		//for the text of the nameTd jQuery item to be the students name
		//for the text of the ageTd jQuery item to be the students age
		//for the text of the genderTd jQuery item to be the students gender

		//append the name td, the age td, and the gender td to the tr jquery item
		tr.append(nameTd).append(ageTd).append(genderTd);
		//append the new row (tr) to the table
		//Add to table in jquery: https://stackoverflow.com/questions/171027/add-table-row-in-jquery
		$("table").append(tr)
	});
});