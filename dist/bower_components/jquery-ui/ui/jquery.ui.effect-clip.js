/*!
 * jQuery UI Effects Clip 1.10.4
 * http://jqueryui.com
 *
 * Copyright 2014 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/clip-effect/
 *
 * Depends:
 *	jquery.ui.effect.js
 */

!function(e,t){e.effects.effect.clip=function(t,i){var o,s,f,c=e(this),r=["position","top","bottom","left","right","height","width"],a=e.effects.setMode(c,t.mode||"hide"),n="show"===a,h=t.direction||"vertical",d="vertical"===h,p=d?"height":"width",u=d?"top":"left",l={};e.effects.save(c,r),c.show(),o=e.effects.createWrapper(c).css({overflow:"hidden"}),s="IMG"===c[0].tagName?o:c,f=s[p](),n&&(s.css(p,0),s.css(u,f/2)),l[p]=n?f:0,l[u]=n?0:f/2,s.animate(l,{queue:!1,duration:t.duration,easing:t.easing,complete:function(){n||c.hide(),e.effects.restore(c,r),e.effects.removeWrapper(c),i()}})}}(jQuery);