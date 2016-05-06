/*!
 * jQuery UI Effects Slide 1.10.4
 * http://jqueryui.com
 *
 * Copyright 2014 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/slide-effect/
 *
 * Depends:
 *	jquery.ui.effect.js
 */

!function(e,t){e.effects.effect.slide=function(t,o){var i,s=e(this),f=["position","top","bottom","left","right","width","height"],r=e.effects.setMode(s,t.mode||"show"),c="show"===r,n=t.direction||"left",d="up"===n||"down"===n?"top":"left",a="up"===n||"left"===n,h={};e.effects.save(s,f),s.show(),i=t.distance||s["top"===d?"outerHeight":"outerWidth"](!0),e.effects.createWrapper(s).css({overflow:"hidden"}),c&&s.css(d,a?isNaN(i)?"-"+i:-i:i),h[d]=(c?a?"+=":"-=":a?"-=":"+=")+i,s.animate(h,{queue:!1,duration:t.duration,easing:t.easing,complete:function(){"hide"===r&&s.hide(),e.effects.restore(s,f),e.effects.removeWrapper(s),o()}})}}(jQuery);