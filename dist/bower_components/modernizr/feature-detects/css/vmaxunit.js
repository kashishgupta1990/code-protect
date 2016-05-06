/*!
{
  "name": "CSS vmax unit",
  "property": "cssvmaxunit",
  "caniuse": "viewport-units",
  "tags": ["css"],
  "builderAliases": ["css_vmaxunit"],
  "notes": [{
    "name": "Related Modernizr Issue",
    "href": "https://github.com/Modernizr/Modernizr/issues/572"
  },{
    "name": "JSFiddle Example",
    "href": "https://jsfiddle.net/glsee/JDsWQ/4/"
  }]
}
!*/

define(["Modernizr","docElement","testStyles","roundedEquals"],function(t,e,i,d){i("#modernizr1{width: 50vmax}#modernizr2{width:50px;height:50px;overflow:scroll}#modernizr3{position:fixed;top:0;left:0;bottom:0;right:0}",function(e){var i=e.childNodes[2],o=e.childNodes[1],n=e.childNodes[0],l=parseInt((o.offsetWidth-o.clientWidth)/2,10),r=n.clientWidth/100,s=n.clientHeight/100,h=parseInt(50*Math.max(r,s),10),c=parseInt((window.getComputedStyle?getComputedStyle(i,null):i.currentStyle).width,10);t.addTest("cssvmaxunit",d(h,c)||d(h,c-l))},3)});