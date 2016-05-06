/*!
{
  "name": "dataset API",
  "caniuse": "dataset",
  "property": "dataset",
  "tags": ["dom"],
  "builderAliases": ["dom_dataset"],
  "authors": ["@phiggins42"]
}
!*/

define(["Modernizr","createElement"],function(t,e){t.addTest("dataset",function(){var t=e("div");return t.setAttribute("data-a-b","c"),!(!t.dataset||"c"!==t.dataset.aB)})});