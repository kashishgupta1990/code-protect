/*!
{
  "name": "SVG clip paths",
  "property": "svgclippaths",
  "tags": ["svg"],
  "notes": [{
    "name": "Demo",
    "href": "http://srufaculty.sru.edu/david.dailey/svg/newstuff/clipPath4.svg"
  }]
}
!*/

define(["Modernizr","toStringFn"],function(t,e){t.addTest("svgclippaths",function(){return!!document.createElementNS&&/SVGClipPath/.test(e.call(document.createElementNS("http://www.w3.org/2000/svg","clipPath")))})});