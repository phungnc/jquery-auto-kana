(function( $ ){
	$.fn.convertTo = function (targetElement) {
		//
		//$(txtBox1).val()
		//console.log( $(txtBox2).val() );
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
				//targetVal = sourceVal;
				targetEl.val(sourceVal)
			};	
		};

		function getKana (text) {
			// body...
			return text.replace( /[^ 　ぁあ-んー]/g, "" );
		}

	};
})(jQuery);