/*!
{
  "name": "placeholder attribute",
  "property": "placeholder",
  "tags": ["forms", "attribute"],
  "builderAliases": ["forms_placeholder"]
}
!*/

define(["Modernizr","createElement"],function(e,n){e.addTest("placeholder","placeholder"in n("input")&&"placeholder"in n("textarea"))});