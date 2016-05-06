/*!
{
  "name": "Box Shadow",
  "property": "boxshadow",
  "caniuse": "css-boxshadow",
  "tags": ["css"],
  "knownBugs": [
    "WebOS false positives on this test.",
    "The Kindle Silk browser false positives"
  ]
}
!*/

define(["Modernizr","testAllProps"],function(o,d){o.addTest("boxshadow",d("boxShadow","1px 1px",!0))});