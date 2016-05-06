/*!
{
  "name": "CSS Filters",
  "property": "cssfilters",
  "caniuse": "css-filters",
  "polyfills": ["polyfilter"],
  "tags": ["css"],
  "builderAliases": ["css_filters"],
  "notes": [{
    "name": "MDN article on CSS filters",
    "href": "https://developer.mozilla.org/en-US/docs/Web/CSS/filter"
  }]
}
!*/

define(["Modernizr","createElement","prefixes","testAllProps","test/css/supports"],function(e,t,s,r){e.addTest("cssfilters",function(){if(e.supports)return r("filter","blur(2px)");var n=t("a");return n.style.cssText=s.join("filter:blur(2px); "),!!n.style.length&&(void 0===document.documentMode||document.documentMode>9)})});