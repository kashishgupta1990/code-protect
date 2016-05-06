/*!
{
  "name": "Border Image",
  "property": "borderimage",
  "caniuse": "border-image",
  "polyfills": ["css3pie"],
   "knownBugs": ["Android < 2.0 is true, but has a broken implementation"],
  "tags": ["css"]
}
!*/

define(["Modernizr","testAllProps"],function(e,r){e.addTest("borderimage",r("borderImage","url() 1",!0))});