// https://firebase.google.com/docs/database/web/read-and-write
$(document).ready(function(){
	var firebaseConfig = {
		apiKey: "AIzaSyCtRNmmVhqdH3xrEAtOZ8zKE-sLSKS21Sw",
		authDomain: "classapp-1b61b.firebaseapp.com",
		databaseURL: "https://classapp-1b61b.firebaseio.com",
		projectId: "classapp-1b61b",
		storageBucket: "",
		messagingSenderId: "500229754372",
		appId: "1:500229754372:web:cfc2e76462bb9a7f"
	};

	firebase.initializeApp(firebaseConfig);

	var studentsRef = firebase.database().ref('students');

	function addDataToFirebase(){
		studentsRef.set([
			{
				name: "George",
				grades: [83,87]
			},
			{
				name: "Jim",
				grades: [52,66]
			}
		]);
	}

	//addDataToFirebase();
	$("#add-grade-form").on('submit', function(e){
		e.preventDefault();

		var studentName = $('#student-select').val();
		var studentGrade = $("#student-grade-input").val();

		var grades;
		var key;
		firebase.database().ref('students').on('value', function(snapshot) {

			snapshot.forEach((student) => {
				if(studentName === student.val().name){
					key = student.key
					grades = student.val().grades;
				}
			})

		});

		if(grades[0] === "default"){
			grades.splice(0,1)
		}
		grades.push(parseInt(studentGrade));
		firebase.database().ref('students/' + key).update({name: studentName, grades: grades})
	});

	$("#add-student-form").on('submit', function(e){
		e.preventDefault();

		studentsRef.push({name: $('#student-name-input').val(), grades: ["default"]})
	});

	studentsRef.on('child_added', function(data) {
		console.log("data added")
		console.log(data.val())
	});

	studentsRef.on('child_changed', function(data) {
		console.log("data udpated")
		console.log(data.val())
	});

	firebase.database().ref('students').on('value', function(snapshot) {
		$("#student-select").empty();

		var defaultOption = $("<option>")
		defaultOption.attr("disabled", true);
		defaultOption.attr("selected", true);
		defaultOption.text("Select a Student");
		$("#student-select").append(defaultOption);

		snapshot.forEach(function(student) {
			var studentOption = $("<option>");
			studentOption.attr("value", student.val().name);
			studentOption.text(student.val().name);
			$("#student-select").append(studentOption);
		});

	});

});