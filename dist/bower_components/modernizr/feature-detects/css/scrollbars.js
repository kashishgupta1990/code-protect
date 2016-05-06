/*!
{
  "name": "CSS Stylable Scrollbars",
  "property": "cssscrollbar",
  "tags": ["css"],
  "builderAliases": ["css_scrollbars"]
}
!*/

define(["Modernizr","testStyles","prefixes"],function(i,r,l){r("#modernizr{overflow: scroll; width: 40px; height: 40px; }#"+l.join("scrollbar{width:0px} #modernizr::").split("#").slice(1).join("#")+"scrollbar{width:0px}",function(r){i.addTest("cssscrollbar",40==r.scrollWidth)})});