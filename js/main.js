$(document).ready(function() {
	
	$('.animsition').animsition();
	
	function resize() {
		var winHeight = $(window).height();
		var winWidth = $(window).width();		
		$(".main").css('width',winWidth).css('height',winHeight);		
	}	
	$(document).ready(function($) {
		resize();					     		     
	});	
	$(window).on("resize", function(){ 	
		resize();
	});
	
	$('.nav a').click(function (e) {
		var currentAnchor = $(this).attr('href');
		$('html, body').animate({
			scrollTop: $(currentAnchor).offset().top - 80
		}, 500);
		e.preventDefault();
	});
	
	$(window).scroll(function() {
		if ($(this).scrollTop() > 300) {
			$('.page-top').fadeIn(300);
		} else {
			$('.page-top').fadeOut(200);
		}
	});
	
	$('.page-top').click(function(event){
		event.preventDefault();
		$('html, body').animate({scrollTop:0},300);
	});
	
});