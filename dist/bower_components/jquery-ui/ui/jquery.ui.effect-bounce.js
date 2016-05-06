/*!
 * jQuery UI Effects Bounce 1.10.4
 * http://jqueryui.com
 *
 * Copyright 2014 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/bounce-effect/
 *
 * Depends:
 *	jquery.ui.effect.js
 */

!function(e,t){e.effects.effect.bounce=function(t,i){var o,c,a,f=e(this),s=["position","top","bottom","left","right","height","width"],p=e.effects.setMode(f,t.mode||"effect"),n="hide"===p,u="show"===p,r=t.direction||"up",h=t.distance,d=t.times||5,m=2*d+(u||n?1:0),l=t.duration/m,y=t.easing,g="up"===r||"down"===r?"top":"left",w="up"===r||"left"===r,q=f.queue(),v=q.length;for((u||n)&&s.push("opacity"),e.effects.save(f,s),f.show(),e.effects.createWrapper(f),h||(h=f["top"===g?"outerHeight":"outerWidth"]()/3),u&&(a={opacity:1},a[g]=0,f.css("opacity",0).css(g,w?2*-h:2*h).animate(a,l,y)),n&&(h/=Math.pow(2,d-1)),a={},a[g]=0,o=0;d>o;o++)c={},c[g]=(w?"-=":"+=")+h,f.animate(c,l,y).animate(a,l,y),h=n?2*h:h/2;n&&(c={opacity:0},c[g]=(w?"-=":"+=")+h,f.animate(c,l,y)),f.queue(function(){n&&f.hide(),e.effects.restore(f,s),e.effects.removeWrapper(f),i()}),v>1&&q.splice.apply(q,[1,0].concat(q.splice(v,m+1))),f.dequeue()}}(jQuery);