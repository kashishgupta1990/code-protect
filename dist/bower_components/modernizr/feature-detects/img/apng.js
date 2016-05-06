/*!
{
  "name": "Animated PNG",
  "async": true,
  "property": "apng",
  "tags": ["image"],
  "builderAliases": ["img_apng"],
  "notes": [{
    "name": "Wikipedia Article",
    "href": "https://en.wikipedia.org/wiki/APNG"
  }]
}
!*/

define(["Modernizr","createElement","addTest","test/canvas"],function(A,e,n){A.addAsyncTest(function(){if(!A.canvas)return!1;var a=new Image,t=e("canvas"),g=t.getContext("2d");a.onload=function(){n("apng",function(){return"undefined"==typeof t.getContext?!1:(g.drawImage(a,0,0),0===g.getImageData(0,0,1,1).data[3])})},a.src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAACGFjVEwAAAABAAAAAcMq2TYAAAANSURBVAiZY2BgYPgPAAEEAQB9ssjfAAAAGmZjVEwAAAAAAAAAAQAAAAEAAAAAAAAAAAD6A+gBAbNU+2sAAAARZmRBVAAAAAEImWNgYGBgAAAABQAB6MzFdgAAAABJRU5ErkJggg=="})});