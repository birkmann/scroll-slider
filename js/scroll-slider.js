(function ($) {

    $.fn.scrollSlider = function (options) {

        var settings = $.extend({
            'autoplay': false
        }, options);

        return this.each(function () {
            var this_slider = this;
            var slides;
			var count = $(this_slider).children('*:not(.nav)').length;

			if (count > 0) {
				slides = $(this_slider).children('*:not(.nav)').find(".slide");
				
				$(slides).each(function () {
					var bgImage = $(this).find(".bg").data('bg');
					$(this).find(".bg").css("background-image", "url(' " + bgImage + " ')");
				});
			}

        });
    }
})(jQuery);
