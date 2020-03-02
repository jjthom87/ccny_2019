//https://www.w3schools.com/bootstrap4/tryit.asp?filename=trybs_toast&stacked=h
//https://getbootstrap.com/docs/4.3/components/toasts/
$(document).ready(function(){
	$('#toast-button').on('click', function(){
		$('.toast').toast('show')
	})
});