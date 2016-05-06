/*!
 * jQuery UI Effects Highlight 1.10.4
 * http://jqueryui.com
 *
 * Copyright 2014 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/highlight-effect/
 *
 * Depends:
 *	jquery.ui.effect.js
 */

!function(e,o){e.effects.effect.highlight=function(o,c){var n=e(this),a=["backgroundImage","backgroundColor","opacity"],t=e.effects.setMode(n,o.mode||"show"),f={backgroundColor:n.css("backgroundColor")};"hide"===t&&(f.opacity=0),e.effects.save(n,a),n.show().css({backgroundImage:"none",backgroundColor:o.color||"#ffff99"}).animate(f,{queue:!1,duration:o.duration,easing:o.easing,complete:function(){"hide"===t&&n.hide(),e.effects.restore(n,a),c()}})}}(jQuery);