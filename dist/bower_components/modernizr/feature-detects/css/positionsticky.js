/*!
{
  "name": "CSS position: sticky",
  "property": "csspositionsticky",
  "tags": ["css"],
  "builderAliases": ["css_positionsticky"],
  "notes": [{
    "name": "Chrome bug report",
    "href":"https://code.google.com/p/chromium/issues/detail?id=322972"
  }],
  "warnings": [ "using position:sticky on anything but top aligned elements is buggy in Chrome < 37 and iOS <=7+" ]
}
!*/

define(["Modernizr","createElement","prefixes"],function(e,i,n){e.addTest("csspositionsticky",function(){var e="position:",t="sticky",s=i("a"),o=s.style;return o.cssText=e+n.join(t+";"+e).slice(0,-e.length),-1!==o.position.indexOf(t)})});