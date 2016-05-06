/*!
{
  "name": "CSS :checked pseudo-selector",
  "caniuse": "css-sel3",
  "property": "checked",
  "tags": ["css"],
  "notes": [{
    "name": "Related Github Issue",
    "href": "https://github.com/Modernizr/Modernizr/pull/879"
  }]
}
!*/

define(["Modernizr","createElement","testStyles"],function(e,t,n){e.addTest("checked",function(){return n("#modernizr {position:absolute} #modernizr input {margin-left:10px} #modernizr :checked {margin-left:20px;display:block}",function(e){var n=t("input");return n.setAttribute("type","checkbox"),n.setAttribute("checked","checked"),e.appendChild(n),20===n.offsetLeft})})});