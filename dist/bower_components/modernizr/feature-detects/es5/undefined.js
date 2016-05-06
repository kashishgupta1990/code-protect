/*!
{
  "name": "ES5 Immutable Undefined",
  "property": "es5undefined",
  "notes": [{
    "name": "ECMAScript 5.1 Language Specification",
    "href": "http://www.ecma-international.org/ecma-262/5.1/"
  }, {
    "name": "original implementation of detect code",
    "href": "http://kangax.github.io/es5-compat-table/"
  }],
  "authors": ["Ron Waldon (@jokeyrhyme)"],
  "tags": ["es5"]
}
!*/

define(["Modernizr"],function(n){n.addTest("es5undefined",function(){var n,d;try{d=window.undefined,window.undefined=12345,n="undefined"==typeof window.undefined,window.undefined=d}catch(e){return!1}return n})});