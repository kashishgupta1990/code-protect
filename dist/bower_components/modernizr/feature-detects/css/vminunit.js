/*!
{
  "name": "CSS vmin unit",
  "property": "cssvminunit",
  "caniuse": "viewport-units",
  "tags": ["css"],
  "builderAliases": ["css_vminunit"],
  "notes": [{
    "name": "Related Modernizr Issue",
    "href": "https://github.com/Modernizr/Modernizr/issues/572"
  },{
    "name": "JSFiddle Example",
    "href": "https://jsfiddle.net/glsee/JRmdq/8/"
  }]
}
!*/

define(["Modernizr","docElement","testStyles","roundedEquals"],function(t,e,i,d){i("#modernizr1{width: 50vm;width:50vmin}#modernizr2{width:50px;height:50px;overflow:scroll}#modernizr3{position:fixed;top:0;left:0;bottom:0;right:0}",function(e){var i=e.childNodes[2],n=e.childNodes[1],o=e.childNodes[0],l=parseInt((n.offsetWidth-n.clientWidth)/2,10),r=o.clientWidth/100,h=o.clientHeight/100,s=parseInt(50*Math.min(r,h),10),c=parseInt((window.getComputedStyle?getComputedStyle(i,null):i.currentStyle).width,10);t.addTest("cssvminunit",d(s,c)||d(s,c-l))},3)});