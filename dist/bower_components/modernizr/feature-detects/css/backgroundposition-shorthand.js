/*!
{
  "name": "Background Position Shorthand",
  "property": "bgpositionshorthand",
  "tags": ["css"],
  "builderAliases": ["css_backgroundposition_shorthand"],
  "notes": [{
    "name": "MDN Docs",
    "href": "https://developer.mozilla.org/en/CSS/background-position"
  }, {
    "name": "W3 Spec",
    "href": "https://www.w3.org/TR/css3-background/#background-position"
  }, {
    "name": "Demo",
    "href": "https://jsfiddle.net/Blink/bBXvt/"
  }]
}
!*/

define(["Modernizr","createElement"],function(t,n){t.addTest("bgpositionshorthand",function(){var t=n("a"),o=t.style,e="right 10px bottom 10px";return o.cssText="background-position: "+e+";",o.backgroundPosition===e})});