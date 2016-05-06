/*!
{
  "name": "CSS Gradients",
  "caniuse": "css-gradients",
  "property": "cssgradients",
  "tags": ["css"],
  "knownBugs": ["False-positives on webOS (https://github.com/Modernizr/Modernizr/issues/202)"],
  "notes": [{
    "name": "Webkit Gradient Syntax",
    "href": "https://webkit.org/blog/175/introducing-css-gradients/"
  },{
    "name": "Linear Gradient Syntax",
    "href": "https://developer.mozilla.org/en-US/docs/Web/CSS/linear-gradient"
  },{
    "name": "W3C Gradient Spec",
    "href": "https://drafts.csswg.org/css-images-3/#gradients"
  }]
}
!*/

define(["Modernizr","prefixes","createElement"],function(e,t,r){e.addTest("cssgradients",function(){for(var i,n="background-image:",a="gradient(linear,left top,right bottom,from(#9f9),to(white));",o="",f=0,d=t.length-1;d>f;f++)i=0===f?"to ":"",o+=n+t[f]+"linear-gradient("+i+"left top, #9f9, white);";e._config.usePrefixes&&(o+=n+"-webkit-"+a);var g=r("a"),s=g.style;return s.cssText=o,(""+s.backgroundImage).indexOf("gradient")>-1})});