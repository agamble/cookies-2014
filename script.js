var faded = false;

$('#show_hide_demo .button_box').on('click', function(e){
	faded = fade_function(faded);
});

var fade_function = function(visible){
	if (visible == false){
		$('#show_hide').fadeOut();
		return true;
	} else {
		$('#show_hide').fadeIn();
		return false;
	}
}