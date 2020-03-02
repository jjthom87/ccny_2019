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

firebase.database().ref("todos").on("value", function(snapshot){
	$("#todos").empty();
	$("#completed-todos").empty();
	if(snapshot.val()){
		var num = 0;
		snapshot.forEach((childSnapshot) => {
			if(!childSnapshot.val().completed){
				num++;
				var todoDiv = $("<div>");

				var todo = $("<span>").text(num + ". " + childSnapshot.val().todo);

				var xButton = $("<button>", {
					class: "btn btn-danger delete-todo-button",
					text: "X"
				});
				xButton.attr("todo-id", childSnapshot.key);

				var completedButton = $("<button>", {
					class: "btn btn-primary completed-todo-button",
					text: "Completed"
				});
				completedButton.attr("todo-id", childSnapshot.key);

				todoDiv.append(todo).append(completedButton).append(xButton);

				$("#todos").append(todoDiv);
			} else {
				var completedTodo = $("<p>").text(childSnapshot.val().todo);
				$("#completed-todos").append(completedTodo);
			}
		});
	}
});

$("#add-todo-form").on("submit", function(e){
	e.preventDefault();

	var todo = $("#todo-input").val();

	firebase.database().ref("todos").push({todo: todo, completed: false});
	$("#todo-input").val("");
});

$(document).on('click', '.delete-todo-button', function(){
	firebase.database().ref("todos/" + $(this).attr("todo-id")).remove();
});

$(document).on('click', '.completed-todo-button', function(){
	firebase.database().ref("todos/" + $(this).attr("todo-id")).update({completed: true});
});