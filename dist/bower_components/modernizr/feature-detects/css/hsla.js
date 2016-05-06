/*!
{
  "name": "CSS HSLA Colors",
  "caniuse": "css3-colors",
  "property": "hsla",
  "tags": ["css"]
}
!*/

define(["Modernizr","createElement","contains"],function(n,o,r){n.addTest("hsla",function(){var n=o("a").style;return n.cssText="background-color:hsla(120,40%,100%,.5)",r(n.backgroundColor,"rgba")||r(n.backgroundColor,"hsla")})});