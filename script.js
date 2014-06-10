$(document).ready(function () {
	// console.log('ready?');
	// 	console.log($('form'));
	$("form").submit(function( event ) {
			console.log($('input:first'));
			console.log($("input.cc-number"));
		if ($('input:first').val() === "correct" ){
			alert('yes!');
		}
		if (/^\d{9}$/.test($('input.cc-number').val())) {
			alert('it is a valid number, thank you');
		} else {
			alert('no number, please try again');
		}

		event.preventDefault();
	});
});