/*!
{
  "name": "CSS :last-child pseudo-selector",
  "caniuse": "css-sel3",
  "property": "lastchild",
  "tags": ["css"],
  "builderAliases": ["css_lastchild"],
  "notes": [{
    "name": "Related Github Issue",
    "href": "https://github.com/Modernizr/Modernizr/pull/304"
  }]
}
!*/

define(["Modernizr","testStyles"],function(i,d){d("#modernizr div {width:100px} #modernizr :last-child{width:200px;display:block}",function(d){i.addTest("lastchild",d.lastChild.offsetWidth>d.firstChild.offsetWidth)},2)});