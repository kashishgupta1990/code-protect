/*! {
  "name": "hairline",
  "property": "csshairline",
  "tags": ["css"],
  "authors": ["strarsis"],
  "notes": [{
    "name": "Blog post about CSS retina hairlines",
    "href": "http://dieulot.net/css-retina-hairline"
  },{
    "name": "Derived from",
    "href": "https://gist.github.com/dieulot/520a49463f6058fbc8d1"
  }]
}
!*/

define(["Modernizr","testStyles"],function(e,n){e.addTest("hairline",function(){return n("#modernizr {border:.5px solid transparent}",function(e){return 1===e.offsetHeight})})});