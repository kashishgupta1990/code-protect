/*!
{
  "name": "CSS Multiple Backgrounds",
  "caniuse": "multibackgrounds",
  "property": "multiplebgs",
  "tags": ["css"]
}
!*/

define(["Modernizr","createElement"],function(t,e){t.addTest("multiplebgs",function(){var t=e("a").style;return t.cssText="background:url(https://),url(https://),red url(https://)",/(url\s*\(.*?){3}/.test(t.background)})});