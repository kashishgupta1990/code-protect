/*!
 * jQuery UI Effects Explode 1.10.4
 * http://jqueryui.com
 *
 * Copyright 2014 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/explode-effect/
 *
 * Depends:
 *	jquery.ui.effect.js
 */

!function(e,i){e.effects.effect.explode=function(i,t){function o(){M.push(this),M.length===a*p&&s()}function s(){r.css({visibility:"visible"}),e(M).remove(),v||r.hide(),t()}var f,d,n,c,h,l,a=i.pieces?Math.round(Math.sqrt(i.pieces)):3,p=a,r=e(this),u=e.effects.setMode(r,i.mode||"hide"),v="show"===u,b=r.show().css("visibility","hidden").offset(),y=Math.ceil(r.outerWidth()/p),w=Math.ceil(r.outerHeight()/a),M=[];for(f=0;a>f;f++)for(c=b.top+f*w,l=f-(a-1)/2,d=0;p>d;d++)n=b.left+d*y,h=d-(p-1)/2,r.clone().appendTo("body").wrap("<div></div>").css({position:"absolute",visibility:"visible",left:-d*y,top:-f*w}).parent().addClass("ui-effects-explode").css({position:"absolute",overflow:"hidden",width:y,height:w,left:n+(v?h*y:0),top:c+(v?l*w:0),opacity:v?0:1}).animate({left:n+(v?0:h*y),top:c+(v?0:l*w),opacity:v?1:0},i.duration||500,i.easing,o)}}(jQuery);