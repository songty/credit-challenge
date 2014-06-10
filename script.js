$(document).ready(function () {
	// console.log('ready?');
	// 	console.log($('form'));
	$("form").submit(function( event ) {
			console.log($('name'));
		if ($('name:first').val() === "correct" ){
			alert('yes!');
		}
		event.preventDefault();
	});
});