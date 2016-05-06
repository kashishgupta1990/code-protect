/*!
{
  "name": "CSS rgba",
  "caniuse": "css3-colors",
  "property": "rgba",
  "tags": ["css"],
  "notes": [{
    "name": "CSSTricks Tutorial",
    "href": "https://css-tricks.com/rgba-browser-support/"
  }]
}
!*/

define(["Modernizr","createElement"],function(r,e){r.addTest("rgba",function(){var r=e("a").style;return r.cssText="background-color:rgba(150,255,150,.5)",(""+r.backgroundColor).indexOf("rgba")>-1})});