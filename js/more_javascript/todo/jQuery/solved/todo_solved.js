$(document).ready(function(){

	var num = 0;
	var todos = [];

	$("#search-button").click(function(){
		num++;
		var todoInput = $("#add-todo-input").val();

		var todo = {
			id: num,
			todo: todoInput
		}
		todos.push(todo);

		var todoDiv = $("<div id='todo-id-"+num+"'>");

		var todo = $("<p>").text(todoInput)

		var xButton = $("<button>", {
			class: "btn btn-danger delete-todo-button",
			text: "X"
		});
		xButton.attr("todo-id", num);

		todoDiv.append(todoInput).append(xButton);

		$("#todos-div").append(todoDiv);
		
		$("#add-todo-input").val("");
	});

	$(document).on('click', '.delete-todo-button', function(){
		var todoId = $(this).attr("todo-id");

		deleteUsingJquery(todoId);
		// deleteUsingArray(todoId);
	});

	function deleteUsingJquery(todoId){
		$("#todo-id-" + todoId).remove();
	}

	function deleteUsingArray(todoId){
		$("#todos-div").empty();

		todos.forEach((todo, i) => {
			if(todo.id == todoId){
				todos.splice(i, 1);
			}
		});

		todos.forEach((todo, i) => {
			var todoDiv = $("<div>");

			var xButton = $("<button>", {
				class: "btn btn-danger delete-todo-button",
				text: "X"
			});
			xButton.attr("todo-id", todo.id);

			todoDiv.append(todo.todo).append(xButton);

			$("#todos-div").append(todoDiv)
		})
	}

});