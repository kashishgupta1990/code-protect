/*!
{
  "name": "will-change",
  "property": "willchange",
  "notes": [{
    "name": "Spec",
    "href": "https://drafts.csswg.org/css-will-change/"
  }]
}
!*/

define(["Modernizr","docElement"],function(e,n){e.addTest("willchange","willChange"in n.style)});