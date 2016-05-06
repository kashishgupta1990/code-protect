/*!
{
  "name": "ruby, rp, rt Elements",
  "caniuse": "ruby",
  "property": "ruby",
  "tags": ["elem"],
  "builderAliases": ["elem_ruby"],
  "authors": ["Cătălin Mariș"],
  "notes": [{
    "name": "WHATWG Specification",
    "href": "https://html.spec.whatwg.org/multipage/semantics.html#the-ruby-element"
  }]
}
!*/

define(["Modernizr","createElement","docElement"],function(e,t,n){e.addTest("ruby",function(){function e(e,t){var n;return window.getComputedStyle?n=document.defaultView.getComputedStyle(e,null).getPropertyValue(t):e.currentStyle&&(n=e.currentStyle[t]),n}function r(){n.removeChild(l),l=null,u=null,d=null}var l=t("ruby"),u=t("rt"),d=t("rp"),i="display",o="fontSize";return l.appendChild(d),l.appendChild(u),n.appendChild(l),"none"==e(d,i)||"ruby"==e(l,i)&&"ruby-text"==e(u,i)||"6pt"==e(d,o)&&"6pt"==e(u,o)?(r(),!0):(r(),!1)})});