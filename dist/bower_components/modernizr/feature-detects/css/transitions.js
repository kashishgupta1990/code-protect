/*!
{
  "name": "CSS Transitions",
  "property": "csstransitions",
  "caniuse": "css-transitions",
  "tags": ["css"]
}
!*/

define(["Modernizr","testAllProps"],function(n,s){n.addTest("csstransitions",s("transition","all",!0))});