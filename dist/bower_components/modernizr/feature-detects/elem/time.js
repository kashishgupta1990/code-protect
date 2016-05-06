/*!
{
  "name": "time Element",
  "property": "time",
  "tags": ["elem"],
  "builderAliases": ["elem_time"],
  "notes": [{
    "name": "WhatWG Spec",
    "href": "https://html.spec.whatwg.org/multipage/semantics.html#the-time-element"
  }]
}
!*/

define(["Modernizr","createElement"],function(e,t){e.addTest("time","valueAsDate"in t("time"))});