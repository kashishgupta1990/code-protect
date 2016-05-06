/*!
{
  "name": "DOM Pointer Events API",
  "property": "pointerevents",
  "tags": ["input"],
  "authors": ["Stu Cox"],
  "notes": [
    {
      "name": "W3C spec",
      "href": "https://www.w3.org/TR/pointerevents/"
    }
  ],
  "warnings": ["This property name now refers to W3C DOM PointerEvents: https://github.com/Modernizr/Modernizr/issues/548#issuecomment-12812099"],
  "polyfills": ["handjs"]
}
!*/

define(["Modernizr","domPrefixes","hasEvent"],function(n,e,t){n.addTest("pointerevents",function(){var o=!1,r=e.length;for(o=n.hasEvent("pointerdown");r--&&!o;)t(e[r]+"pointerdown")&&(o=!0);return o})});