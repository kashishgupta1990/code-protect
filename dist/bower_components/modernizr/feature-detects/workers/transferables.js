/*!
{
  "name": "Transferables Objects",
  "property": "transferables",
  "tags": ["performance", "workers"],
  "builderAliases": ["transferables"],
  "notes": [{
    "name": "HTML5 Rocks article",
    "href": "http://updates.html5rocks.com/2011/12/Transferable-Objects-Lightning-Fast"
  }],
  "async": true
}
!*/

define(["Modernizr","addTest","test/blob","test/url/bloburls","test/workers/webworkers","test/typed-arrays"],function(e,r){e.addAsyncTest(function(){function t(){r("transferables",!1),s()}function s(){c&&URL.revokeObjectURL(c),u&&u.terminate(),n&&clearTimeout(n)}var o=!!(e.blobconstructor&&e.bloburls&&e.webworkers&&e.typedarrays);if(!o)return r("transferables",!1);try{var a,n,b='var hello = "world"',l=new Blob([b],{type:"text/javascript"}),c=URL.createObjectURL(l),u=new Worker(c);u.onerror=t,n=setTimeout(t,200),a=new ArrayBuffer(1),u.postMessage(a,[a]),r("transferables",0===a.byteLength),s()}catch(f){t()}})});