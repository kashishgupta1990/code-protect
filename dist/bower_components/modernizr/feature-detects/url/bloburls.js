/*!
{
  "name": "Blob URLs",
  "property": "bloburls",
  "caniuse": "bloburls",
  "notes": [{
    "name": "W3C Working Draft",
    "href": "https://www.w3.org/TR/FileAPI/#creating-revoking"
  }],
  "tags": ["file", "url"],
  "authors": ["Ron Waldon (@jokeyrhyme)"]
}
!*/

define(["Modernizr","prefixed"],function(e,i){var n=i("URL",window,!1);n=n&&window[n],e.addTest("bloburls",n&&"revokeObjectURL"in n&&"createObjectURL"in n)});