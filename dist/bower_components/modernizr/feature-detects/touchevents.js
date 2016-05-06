/*!
{
  "name": "Touch Events",
  "property": "touchevents",
  "caniuse" : "touch",
  "tags": ["media", "attribute"],
  "notes": [{
    "name": "Touch Events spec",
    "href": "https://www.w3.org/TR/2013/WD-touch-events-20130124/"
  }],
  "warnings": [
    "Indicates if the browser supports the Touch Events spec, and does not necessarily reflect a touchscreen device"
  ],
  "knownBugs": [
    "False-positive on some configurations of Nokia N900",
    "False-positive on some BlackBerry 6.0 builds – https://github.com/Modernizr/Modernizr/issues/372#issuecomment-3112695"
  ]
}
!*/

define(["Modernizr","prefixes","testStyles"],function(o,e,n){o.addTest("touchevents",function(){var o;if("ontouchstart"in window||window.DocumentTouch&&document instanceof DocumentTouch)o=!0;else{var t=["@media (",e.join("touch-enabled),("),"heartz",")","{#modernizr{top:9px;position:absolute}}"].join("");n(t,function(e){o=9===e.offsetTop})}return o})});