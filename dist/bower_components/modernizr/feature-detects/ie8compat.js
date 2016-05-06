/*!
{
  "name": "IE8 compat mode",
  "property": "ie8compat",
  "authors": ["Erich Ocean"]
}
!*/

define(["Modernizr"],function(e){e.addTest("ie8compat",!window.addEventListener&&!!document.documentMode&&7===document.documentMode)});