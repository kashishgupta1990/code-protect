/*!
{
  "name": "ES6 Generators",
  "property": "generators",
  "authors": ["Michael Kachanovskyi"],
  "tags": ["es6"]
}
!*/

define(["Modernizr"],function(n){n.addTest("generators",function(){try{new Function("function* test() {}")()}catch(n){return!1}return!0})});