/*!
{
  "name": "Content Editable",
  "property": "contenteditable",
  "caniuse": "contenteditable",
  "notes": [{
    "name": "WHATWG spec",
    "href": "https://html.spec.whatwg.org/multipage/interaction.html#contenteditable"
  }]
}
!*/

define(["Modernizr","createElement","docElement"],function(e,t,n){e.addTest("contenteditable",function(){if("contentEditable"in n){var e=t("div");return e.contentEditable=!0,"true"===e.contentEditable}})});