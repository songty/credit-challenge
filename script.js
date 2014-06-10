$(document).ready(function () {
	// console.log('ready?');
	// 	console.log($('form'));
	$("form").submit(function( event ) {
			console.log($('input:first'));
			console.log($("input.cc-number"));
		if (/[a-zA-Z\-'\s]+/.test($('input:first').val())){
			alert('yes! You have name');
		} else {
			alert('you need a name');
			$("input.name").addClass("failed");
		}
		if (/^\d{9}$/.test($('input.cc-number').val())) {
			// alert('it is a valid number, thank you');
		} else {
			// alert('no number, please try again');
		}

		event.preventDefault();
	});
});