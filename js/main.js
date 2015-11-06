$(document).ready(function(){
	$('.galimg').each(function(){
	var width = $(this).children('img').width(500),
		height = $(this).children('img').height(500);

		if(width < height) {
			$(this).addClass('portrait');
	}

	 else {
	 	$(this). addClass('landscape');
	 }

	});
});