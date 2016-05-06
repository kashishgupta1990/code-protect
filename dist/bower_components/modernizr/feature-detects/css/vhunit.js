/*!
{
  "name": "CSS vh unit",
  "property": "cssvhunit",
  "caniuse": "viewport-units",
  "tags": ["css"],
  "builderAliases": ["css_vhunit"],
  "notes": [{
    "name": "Related Modernizr Issue",
    "href": "https://github.com/Modernizr/Modernizr/issues/572"
  },{
    "name": "Similar JSFiddle",
    "href": "https://jsfiddle.net/FWeinb/etnYC/"
  }]
}
!*/

define(["Modernizr","testStyles"],function(e,t){t("#modernizr { height: 50vh; }",function(t){var n=parseInt(window.innerHeight/2,10),i=parseInt((window.getComputedStyle?getComputedStyle(t,null):t.currentStyle).height,10);e.addTest("cssvhunit",i==n)})});