/*!
{
  "name": "CSS text-overflow ellipsis",
  "property": "ellipsis",
  "caniuse": "text-overflow",
  "polyfills": [
    "text-overflow"
  ],
  "tags": ["css"]
}
!*/

define(["Modernizr","testAllProps"],function(e,i){e.addTest("ellipsis",i("textOverflow","ellipsis"))});