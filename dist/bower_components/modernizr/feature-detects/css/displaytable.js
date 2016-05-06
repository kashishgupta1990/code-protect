/*!
{
  "name": "CSS Display table",
  "property": "displaytable",
  "caniuse": "css-table",
  "authors": ["scottjehl"],
  "tags": ["css"],
  "builderAliases": ["css_displaytable"],
  "notes": [{
    "name": "Detects for all additional table display values",
    "href": "http://pastebin.com/Gk9PeVaQ"
  }]
}
!*/

define(["Modernizr","testStyles"],function(e,d){d("#modernizr{display: table; direction: ltr}#modernizr div{display: table-cell; padding: 10px}",function(d){var i,t=d.childNodes;i=t[0].offsetLeft<t[1].offsetLeft,e.addTest("displaytable",i,{aliases:["display-table"]})},2)});