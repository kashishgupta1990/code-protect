/*!
 * jQuery UI Effects Drop 1.10.4
 * http://jqueryui.com
 *
 * Copyright 2014 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/drop-effect/
 *
 * Depends:
 *	jquery.ui.effect.js
 */

!function(e,t){e.effects.effect.drop=function(t,o){var i,s=e(this),f=["position","top","bottom","left","right","opacity","height","width"],c=e.effects.setMode(s,t.mode||"hide"),p="show"===c,r=t.direction||"left",n="up"===r||"down"===r?"top":"left",a="up"===r||"left"===r?"pos":"neg",d={opacity:p?1:0};e.effects.save(s,f),s.show(),e.effects.createWrapper(s),i=t.distance||s["top"===n?"outerHeight":"outerWidth"](!0)/2,p&&s.css("opacity",0).css(n,"pos"===a?-i:i),d[n]=(p?"pos"===a?"+=":"-=":"pos"===a?"-=":"+=")+i,s.animate(d,{queue:!1,duration:t.duration,easing:t.easing,complete:function(){"hide"===c&&s.hide(),e.effects.restore(s,f),e.effects.removeWrapper(s),o()}})}}(jQuery);