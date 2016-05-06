/*!
{
  "name": "script[async]",
  "property": "scriptasync",
  "caniuse": "script-async",
  "tags": ["script"],
  "builderAliases": ["script_async"],
  "authors": ["Theodoor van Donge"]
}
!*/

define(["Modernizr","createElement"],function(e,n){e.addTest("scriptasync","async"in n("script"))});