/*!
{
  "name": "canvas blending support",
  "property": "canvasblending",
  "tags": ["canvas"],
  "async" : false,
  "notes": [{
      "name": "HTML5 Spec",
      "href": "https://dvcs.w3.org/hg/FXTF/rawfile/tip/compositing/index.html#blending"
    },
    {
      "name": "Article",
      "href": "https://blogs.adobe.com/webplatform/2013/01/28/blending-features-in-canvas"
    }]
}
!*/

define(["Modernizr","createElement","test/canvas"],function(e,n){e.addTest("canvasblending",function(){if(e.canvas===!1)return!1;var t=n("canvas").getContext("2d");try{t.globalCompositeOperation="screen"}catch(a){}return"screen"===t.globalCompositeOperation})});