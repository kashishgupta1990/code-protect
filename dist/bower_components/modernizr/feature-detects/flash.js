/*!
  {
  "name": "Flash",
  "property": "flash",
  "tags": ["flash"],
  "polyfills": ["shumway"]
  }
  !*/

define(["Modernizr","createElement","docElement","addTest","getBody","isSVG"],function(e,n,o,i,t,a){e.addAsyncTest(function(){var e,c,d=function(e){o.contains(e)||o.appendChild(e)},l=function(e){e.fake&&e.parentNode&&e.parentNode.removeChild(e)},s=function(e,n){var o=!!e;if(o&&(o=new Boolean(o),o.blocked="blocked"===e),i("flash",function(){return o}),n&&v.contains(n)){for(;n.parentNode!==v;)n=n.parentNode;v.removeChild(n)}};try{c="ActiveXObject"in window&&"Pan"in new window.ActiveXObject("ShockwaveFlash.ShockwaveFlash")}catch(r){}if(e=!("plugins"in navigator&&"Shockwave Flash"in navigator.plugins||c),e||a)s(!1);else{var p,h,f=n("embed"),v=t();if(f.type="application/x-shockwave-flash",v.appendChild(f),!("Pan"in f||c))return d(v),s("blocked",f),void l(v);p=function(){return d(v),o.contains(v)?(o.contains(f)?(h=f.style.cssText,""!==h?s("blocked",f):s(!0,f)):s("blocked"),void l(v)):(v=document.body||v,f=n("embed"),f.type="application/x-shockwave-flash",v.appendChild(f),setTimeout(p,1e3))},setTimeout(p,10)}})});