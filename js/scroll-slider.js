(function ($) {

	$.fn.scrollSlider = function (options) {
		var settings = $.extend({
			'autoplay': false,
			'fixed': false
		}, options);

		return this.each(function () {
			var this_slider = this;
			var slides;
			var count = $(this_slider).children('*:not(.nav)').length;

			if (count > 0) {
				slides = $(this_slider).children('*:not(.nav)').find(".slide");
				
				$(slides).each(function (i) {
					var bgImage = $(this).find(".bg").data('bg');
					$(this).attr('id', 'scroll-slide-' + i);
					$(this).find(".bg").css("background-image", "url(' " + bgImage + " ')");
				});

				$(this).append("<nav class=nav-right><ul></ul></nav>");

				for (var i = 0; i <= slides.length - 1; i++) {
					$(this).find(".nav-right ul").append("<li><a href=#scroll-slide-"+i+"><span></span></a></li>");
				}

				if (settings.fixed == true) {
					$(this).addClass("fixed");
				}
			}

		});
	}
	
})(jQuery);

$(window).on('resize scroll', function() {
	$('.scroll-slider').find('.slide').each(function(){
		if ( window.scrollY >= $(this).offset().top - 200) {
			$(this).siblings().removeClass("active");
			$(this).addClass("active");
		}
	});
});