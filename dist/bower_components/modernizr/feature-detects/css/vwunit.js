/*!
{
  "name": "CSS vw unit",
  "property": "cssvwunit",
  "caniuse": "viewport-units",
  "tags": ["css"],
  "builderAliases": ["css_vwunit"],
  "notes": [{
    "name": "Related Modernizr Issue",
    "href": "https://github.com/Modernizr/Modernizr/issues/572"
  },{
    "name": "JSFiddle Example",
    "href": "https://jsfiddle.net/FWeinb/etnYC/"
  }]
}
!*/

define(["Modernizr","testStyles"],function(t,e){e("#modernizr { width: 50vw; }",function(e){var n=parseInt(window.innerWidth/2,10),d=parseInt((window.getComputedStyle?getComputedStyle(e,null):e.currentStyle).width,10);t.addTest("cssvwunit",d==n)})});