/*!
{
  "name": "bdi Element",
  "property": "bdi",
  "notes": [{
    "name": "MDN Overview",
    "href": "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/bdi"
  }]
}
!*/

define(["Modernizr","createElement","docElement"],function(e,d,n){e.addTest("bdi",function(){var e=d("div"),t=d("bdi");t.innerHTML="&#1573;",e.appendChild(t),n.appendChild(e);var i="rtl"===(window.getComputedStyle?getComputedStyle(t,null):t.currentStyle).direction;return n.removeChild(e),i})});