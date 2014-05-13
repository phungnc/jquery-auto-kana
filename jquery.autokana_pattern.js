/*!
 * jQuery lightweight plugin boilerplate
 * Original author: @ajpiano
 * Further changes, comments: @addyosmani
 * Modify to convertKana: @phungnc
 * Licensed under the MIT license
 */
 
 
// the semi-colon before the function invocation is a safety
// net against concatenated scripts and/or other plugins
// that are not closed properly.
;(function ( $, window, document, undefined ) {
 
    // undefined is used here as the undefined global
    // variable in ECMAScript 3 and is mutable (i.e. it can
    // be changed by someone else). undefined isn't really
    // being passed in so we can ensure that its value is
    // truly undefined. In ES5, undefined can no longer be
    // modified.
 
    // window and document are passed through as local
    // variables rather than as globals, because this (slightly)
    // quickens the resolution process and can be more
    // efficiently minified (especially when both are
    // regularly referenced in our plugin).
 
    // Create the defaults once
    var pluginName = "convertKana",
        defaults = {
            targetEl: '',
            katakana: true
        };
 
    // The actual plugin constructor
    function Plugin( element, options ) {
        this.element = element;
 
        // jQuery has an extend method that merges the
        // contents of two or more objects, storing the
        // result in the first object. The first object
        // is generally empty because we don't want to alter
        // the default options for future instances of the plugin
        this.options = $.extend( {}, defaults, options) ;
 
        this._defaults = defaults;
        this._name = pluginName;
 
        this.init();
    }
 
    Plugin.prototype.init = function () {
        // Place initialization logic here
        // We already have access to the DOM element and
        // the options via the instance, e.g. this.element
        // and this.options

        this.sourceEl = $(this.element);
        this.targetEl = $(this.options.targetEl);
        // assign (create) new version of convert function that use this.
        convert = convert.bind(this);
        this.sourceEl.on('keydown', convert);
    };
    // custom 
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
    // A really lightweight plugin wrapper around the constructor,
    // preventing against multiple instantiations
    $.fn[pluginName] = function ( options ) {
        return this.each(function () {
            // $.data method allows us to attach data of any type to DOM elements
            // in a way that is safe from circular references and therefore free from 
            // memory leaks.
            if ( !$.data(this, "plugin_" + pluginName )) {
                $.data( this, "plugin_" + pluginName,
                new Plugin( this, options ));
            }
        });
    }
 
})( jQuery, window, document );