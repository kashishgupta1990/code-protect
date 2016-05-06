/*!
{
  "name": "VML",
  "property": "vml",
  "caniuse": "vml",
  "tags": ["vml"],
  "authors": ["Craig Andrews (@candrews)"],
  "notes": [{
    "name" : "W3C VML reference",
    "href": "https://www.w3.org/TR/NOTE-VML"
  },{
    "name" : "Microsoft VML reference",
    "href": "https://msdn.microsoft.com/en-us/library/bb263898.aspx"
  }]
}
!*/

define(["Modernizr","createElement","isSVG"],function(e,i,t){e.addTest("vml",function(){var e,d=i("div"),n=!1;return t||(d.innerHTML='<v:shape id="vml_flag1" adj="1" />',e=d.firstChild,e.style.behavior="url(#default#VML)",n=e?"object"==typeof e.adj:!0),n})});