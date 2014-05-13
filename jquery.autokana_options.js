(function( $ ){
	$.fn.convertTo = function (targetElement, options) {
		//
		var defaults = {
			katakana: true
		}
		//
		var options = $.extend({}, defaults, options);
		//
		var targetEl  = $(targetElement);
		//
		var sourceEl  = this;
		//
		this.on('keydown', convert);
		//
		function convert () {
			// body...
			var sourceVal = sourceEl.val();
			var sourceLen = sourceVal.length;
			//var targetVal = targetEl.val();
			var targetLen = getKana(sourceVal).length;
			if (targetLen === sourceLen) {
				targetEl.val( toKana(sourceVal) )
			};	
		};

		function getKana (text) {
			// body...
			return text.replace( /[^ 　ぁあ-んー]/g, "" );
		};

		function toKana (src) {
			//
			if (options.katakana) {

			} else {
				return src;
			}
		};

	};
})(jQuery);