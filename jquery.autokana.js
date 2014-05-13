/*!
 * jQuery "best options" plugin boilerplate
 * Author: @cowboy
 * Further changes: @addyosmani
 * Licensed under the MIT license
 */
 
 
;(function ( $, window, document, undefined ) {
 
    $.fn.convertKana = function ( options ) {
 
        // Here's a best practice for overriding "defaults"
        // with specified options. Note how, rather than a
        // regular defaults object being passed as the second
        // parameter, we instead refer to $.fn.pluginName.options
        // explicitly, merging it with the options passed directly
        // to the plugin. This allows us to override options both
        // globally and on a per-call level.
 
        options = $.extend( {}, $.fn.convertKana.options, options );
 
        return this.each(function () {
 
            var elem = $(this);
 
        });
    };
    function convert () {
        var sourceVal = this.sourceEl.val();
        var sourceLen = sourceVal.length;
        var targetLen = getKana(sourceVal).length;
        //
        if (targetLen === sourceLen) {
            this.targetEl.val( toKana.call(this, sourceVal) )
        };
    };
    //
    function getKana (text) {
        // body...
        return text.replace( /[^ 　ぁあ-んー]/g, "" );
    };
    //
    function toKana (src) {
        //
        if (this.options.katakana) {

        } else {
            return src;
        }
    }; 
    // Globally overriding options
    // Here are our publicly accessible default plugin options
    // that are available in case the user doesn't pass in all
    // of the values expected. The user is given a default
    // experience but can also override the values as necessary.
    // e.g. $fn.pluginName.key ="otherval";
 
    $.fn.convertKana.options = {
 
        key: "value",
        myMethod: function ( elem, param ) {
 
        }
    };
 
})( jQuery, window, document );