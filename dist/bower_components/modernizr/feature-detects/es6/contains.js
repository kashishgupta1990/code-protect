/*!
{
  "name": "ES5 String.prototype.contains",
  "property": "contains",
  "authors": ["Robert Kowalski"],
  "tags": ["es6"]
}
!*/

define(["Modernizr","is"],function(n,i){n.addTest("contains",i(String.prototype.contains,"function"))});