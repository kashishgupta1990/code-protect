/*!
{
  "name": "CSS Reflections",
  "caniuse": "css-reflections",
  "property": "cssreflections",
  "tags": ["css"]
}
!*/

define(["Modernizr","testAllProps"],function(e,o){e.addTest("cssreflections",o("boxReflect","above",!0))});