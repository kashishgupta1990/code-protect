/*!
{
  "name": "getRandomValues",
  "property": "getrandomvalues",
  "caniuse": "window.crypto.getRandomValues",
  "tags": ["crypto"],
  "authors": ["komachi"],
  "notes": [{
    "name": "W3C Editor’s Draft",
    "href": "https://dvcs.w3.org/hg/webcrypto-api/raw-file/tip/spec/Overview.html#RandomSource-method-getRandomValues"
  }],
  "polyfills": [
    "polycrypt"
  ]
}
!*/

define(["Modernizr","prefixed","is"],function(n,e,i){var r,a=e("crypto",window);if(a&&"getRandomValues"in a&&"Uint32Array"in window){var d=new Uint32Array(10),o=a.getRandomValues(d);r=o&&i(o[0],"number")}n.addTest("getrandomvalues",!!r)});