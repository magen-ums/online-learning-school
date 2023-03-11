'use strict';

$(window).on('load', function(){
	/*---Preloader---*/
	$(".loader").fadeOut();
	$("#preloader").delay(400).fadeOut("slow");
} );

(function($){
	
	
	/*toggle nav-switch header section*/
	$('.nav-switch').on('click',function(event){
		$(this).toggleClass('active');
		$('.nav-wrap').slideToggle(400);
		event.preventDefault();
	});
	
	
	/*set background image- hero section*/
	
	$('.set-bg').each(function(){
		var bg = $(this).data('setbg');
		$(this).css('background-image','url('+bg+')');
	
	});
	
	/* Progress bar */
	
	$('.progress-bar-style').each (function (){
		var progress = $(this).data("progress");
		var bgcolor = $(this).data("bgcolor");
		var prog_width = progress + '%';
		if(progress <=100){
			$(this).append('<div class="bar-inner" style="width:' + prog_width + '; background:' + bgcolor + ';"><span>' + 
			prog_width + '</span></div>');
		}else{
			$(this).append('<div class="bar-inner" style="width:100%; background:' + bgcolor +';"><span>100%</span></div>');
		}
		
	});
	
	/*Testimonial Slider*/
	$('.testimonials-slider').owlCarousel ({
		loop:true,
		nav:false,
		dots:true,
		margin:128,
		center:true,
		items:1,
		mouseDrag:false,
		animateOut:'fadeOutRight',
		animateIn:'fadeInLeft' ,	
		autoplay:true
		});
	
})(jQuery);