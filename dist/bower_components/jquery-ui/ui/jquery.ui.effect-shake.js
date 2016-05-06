/*!
 * jQuery UI Effects Shake 1.10.4
 * http://jqueryui.com
 *
 * Copyright 2014 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/shake-effect/
 *
 * Depends:
 *	jquery.ui.effect.js
 */

!function(e,t){e.effects.effect.shake=function(t,i){var a,f=e(this),n=["position","top","bottom","left","right","height","width"],s=e.effects.setMode(f,t.mode||"effect"),o=t.direction||"left",c=t.distance||20,r=t.times||3,u=2*r+1,p=Math.round(t.duration/u),d="up"===o||"down"===o?"top":"left",h="up"===o||"left"===o,m={},g={},l={},q=f.queue(),v=q.length;for(e.effects.save(f,n),f.show(),e.effects.createWrapper(f),m[d]=(h?"-=":"+=")+c,g[d]=(h?"+=":"-=")+2*c,l[d]=(h?"-=":"+=")+2*c,f.animate(m,p,t.easing),a=1;r>a;a++)f.animate(g,p,t.easing).animate(l,p,t.easing);f.animate(g,p,t.easing).animate(m,p/2,t.easing).queue(function(){"hide"===s&&f.hide(),e.effects.restore(f,n),e.effects.removeWrapper(f),i()}),v>1&&q.splice.apply(q,[1,0].concat(q.splice(v,u+1))),f.dequeue()}}(jQuery);