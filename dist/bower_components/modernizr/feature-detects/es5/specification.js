/*!
{
  "name": "ES5",
  "property": "es5",
  "notes": [{
    "name": "ECMAScript 5.1 Language Specification",
    "href": "http://www.ecma-international.org/ecma-262/5.1/"
  }],
  "polyfills": ["es5shim", "es5sham"],
  "authors": ["Ron Waldon (@jokeyrhyme)"],
  "tags": ["es5"]
}
!*/

define(["Modernizr","test/es5/array","test/es5/date","test/es5/function","test/es5/object","test/es5/strictmode","test/es5/string","test/json","test/es5/syntax","test/es5/undefined"],function(e){e.addTest("es5",function(){return!!(e.es5array&&e.es5date&&e.es5function&&e.es5object&&e.strictmode&&e.es5string&&e.json&&e.es5syntax&&e.es5undefined)})});