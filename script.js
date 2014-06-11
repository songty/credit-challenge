$(document).ready(function () {
	// console.log('ready?');
	// 	console.log($('form'));
	$("form").submit(function( event ) {
		if (/[a-zA-Z\-'\s]+/.test($('input:first').val())){
			// alert('yes! You have name');
			if($("input.address").val() !== "") {
				// alert('you have an address');
				if($("input.city").val() !== "") {
					// alert('you have a city');
					if($("input.state").val() !== "") {
						// alert('you have a state');
						if (/^\d{9}$/.test($('input.cc-number').val())) {
							// alert('it is a valid number, thank you');
							if (/^(1[0-2]|0[1-9]|\d)\/([2-9]\d[1-9][4-9]|[1-9][4-9])$/.test($('input.cc-exp').val())) {
								alert('it is a valid date, thank you');
								if(/^[0-9]{3}$/.test($('input.cvc').val())) {
									alert('it is a valid cvc');
								} else {
									 alert('no valid cvc, please try again');
									 $("input.cc-cvc").addClass("failed");									
								}
							} else {
								 alert('no valid date, please try again');
								 $("input.cc-exp").addClass("failed");
							}
						} else {
							 alert('no number, please try again');
							 $("input.cc-number").addClass("failed");
						}
					} else {
						alert('you need a state');
						$("input.state").addClass("failed");
					}
				} else {
					alert('you need a city');
					$("input.city").addClass("failed");
				}
			} else {
				alert('you need an address');
				$("input.address").addClass("failed");
			}
		} else {
			alert('you need a name');
			$("input.name").addClass("failed");
		}
		

		event.preventDefault();
	});
});