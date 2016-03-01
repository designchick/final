$(document).ready(function(){                    
	function resizeHeader() {
		var windowHeight=$(window).height();
		$("header").css({"height" : windowHeight})
	}
	resizeHeader();

$(window).resize(function() {
	resizeHeader();

});

});