/*!
{
  "name": "CSS.escape()",
  "property": "cssescape",
  "polyfills": [
    "css-escape"
  ],
  "tags": [
    "css",
    "cssom"
  ]
}
!*/

define(["Modernizr"],function(e){var n=window.CSS;e.addTest("cssescape",n?"function"==typeof n.escape:!1)});