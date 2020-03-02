$(document).ready(function(){
	$('#modal-button').on('click', function(){
		$('.modal-title').text("wassap");
		$('.modal-body').text("what is going on captain")
		$('#exampleModal').modal();
	})
});