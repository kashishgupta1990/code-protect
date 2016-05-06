/*!
{
  "name": "Dart",
  "property": "dart",
  "authors": ["Theodoor van Donge"],
  "notes": [{
    "name": "Language website",
    "href": "https://www.dartlang.org/"
  }]
}
!*/

define(["Modernizr","prefixed"],function(r,t){r.addTest("dart",!!t("startDart",navigator))});