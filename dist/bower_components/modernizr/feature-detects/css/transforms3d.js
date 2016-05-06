/*!
{
  "name": "CSS Transforms 3D",
  "property": "csstransforms3d",
  "caniuse": "transforms3d",
  "tags": ["css"],
  "warnings": [
    "Chrome may occassionally fail this test on some systems; more info: https://code.google.com/p/chromium/issues/detail?id=129004"
  ]
}
!*/

define(["Modernizr","testAllProps","testStyles","docElement","test/css/supports"],function(e,t,s,r){e.addTest("csstransforms3d",function(){var i=!!t("perspective","1px",!0),n=e._config.usePrefixes;if(i&&(!n||"webkitPerspective"in r.style)){var o,d="#modernizr{width:0;height:0}";e.supports?o="@supports (perspective: 1px)":(o="@media (transform-3d)",n&&(o+=",(-webkit-transform-3d)")),o+="{#modernizr{width:7px;height:18px;margin:0;padding:0;border:0}}",s(d+o,function(e){i=7===e.offsetWidth&&18===e.offsetHeight})}return i})});