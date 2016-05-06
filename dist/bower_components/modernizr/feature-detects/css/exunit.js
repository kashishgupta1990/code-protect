/*!
{
  "name": "CSS Font ex Units",
  "authors": ["Ron Waldon (@jokeyrhyme)"],
  "property": "cssexunit",
  "tags": ["css"],
  "notes": [{
    "name": "W3C Spec",
    "href": "https://www.w3.org/TR/css3-values/#font-relative-lengths"
  }]
}
!*/

define(["Modernizr","modElem"],function(e,n){e.addTest("cssexunit",function(){var e,t=n.elem.style;try{t.fontSize="3ex",e=-1!==t.fontSize.indexOf("ex")}catch(i){e=!1}return e})});