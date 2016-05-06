/*!
{
  "name": "cssall",
  "property": "cssall",
  "notes": [{
    "name": "Spec",
    "href": "https://drafts.csswg.org/css-cascade/#all-shorthand"
  }]
}
!*/

define(["Modernizr","docElement"],function(e,l){e.addTest("cssall","all"in l.style)});