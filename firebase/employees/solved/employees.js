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
	// Initialize Firebase
	firebase.initializeApp(firebaseConfig);

	$("#employees-table").hide();
	$("#employee-bio-form-div").hide();

	var employees;
	firebase.database().ref("employees").on('value', function(snapshot) {
		employees = snapshot.val();
	});

	$("input[name='employees']").click(function(){
		$("#employees-table").show();
		$('#employees-table > tbody').empty();

		var filteredEmployees;

		if($(this).val() === "full"){
			filteredEmployees = employees.filter((employee) => employee.fullTime);
		} else {
			filteredEmployees = employees.filter((employee) => !employee.fullTime);
		}

		filteredEmployees.forEach((employee) => {
			var tr = $("<tr>");
			var nameTd = $("<td class='name-td'>").text(employee.name);
			var ageTd = $("<td>").text(employee.age);
			var positionTd = $("<td>").text(employee.position);
			tr.append(nameTd).append(ageTd).append(positionTd);
			$("#employees-table").append(tr)
		});

	})

	var showEmployeeBioForm = false;
	$("#add-employee-bio-button").click(function(){
		if(!showEmployeeBioForm){
			showEmployeeBioForm = true;
			$("#employee-bio-form-div").show();
		} else {
			showEmployeeBioForm = false;
			$("#employee-bio-form-div").hide();			
		}
	});


	$("#employee-bio-form").on('submit', function(e){
		e.preventDefault();

		var inputs = {
			name: $("#name-input").val(),
			hometown: $("#hometown-input").val(),
			bio: $("#bio-input").val()
		}

		firebase.database().ref("employee_bios").push(inputs)

		setTimeout(function(){
			$("#name-input").val("")
			$("#hometown-input").val("")
			$("#bio-input").val("")

			$("#employee-bio-form-div").hide();

			$(".toast-header").empty();
			$(".toast-body").empty();

			$(".toast-header").append($("<p>").text("Bio Added Successfully"))
			$(".toast-body").append($("<p>").text("Bio has been added for " + inputs.name))
			$('.toast').toast('show')
		}, 600)
	});

	var bioFound;
	var bio;
	$(document).on('click', '.name-td', function(){
		bioFound = false;
		var name = $(this).text();

		firebase.database().ref("employee_bios").on('value', function(snapshot) {
			snapshot.forEach(function(childSnapshot){
				if(childSnapshot.val().name == name){
					bioFound = true;
					bio = childSnapshot.val();
				}
			});
		});
		setTimeout(function(){
			if(!bioFound){
				$(".toast-header").empty();
				$(".toast-body").empty();

				$(".toast-header").append($("<p>").text("Bio Not Found for " + name))
				$(".toast-body").append($("<p>").text("Please submit a bio for " + name + " using the 'Add Employee Bio' button."))
				$('.toast').toast('show')
			} else {
				$(".modal-header").empty();
				$(".modal-body").empty();

				$(".modal-header").append($("<h1>").append(bio.name + "'s Biography"))
				$(".modal-body").append($("<p>").text("Name: " + bio.name));
				$(".modal-body").append($("<p>").text("Hometown: " + bio.hometown));
				$(".modal-body").append($("<p>").text("Bio: " + bio.bio));
				$("#employee-modal").modal();
			}
		}, 200)
	});


});