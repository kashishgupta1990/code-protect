/*!
{
  "name": "Workers from Blob URIs",
  "property": "blobworkers",
  "tags": ["performance", "workers"],
  "builderAliases": ["workers_blobworkers"],
  "notes": [{
    "name": "W3C Reference",
    "href": "https://www.w3.org/TR/workers/"
  }],
  "knownBugs": ["This test may output garbage to console."],
  "authors": ["Jussi Kalliokoski"],
  "async": true
}
!*/

define(["Modernizr","addTest"],function(e,o){e.addAsyncTest(function(){function n(){o("blobworkers",!1),i()}function i(){s&&r.revokeObjectURL(s),a&&a.terminate(),c&&clearTimeout(c)}try{var t=window.BlobBuilder,r=window.URL;e._config.usePrefix&&(t=t||window.MozBlobBuilder||window.WebKitBlobBuilder||window.MSBlobBuilder||window.OBlobBuilder,r=r||window.MozURL||window.webkitURL||window.MSURL||window.OURL);var w,d,a,s,c,b="Modernizr",l="this.onmessage=function(e){postMessage(e.data)}";try{w=new Blob([l],{type:"text/javascript"})}catch(u){}w||(d=new t,d.append(l),w=d.getBlob()),s=r.createObjectURL(w),a=new Worker(s),a.onmessage=function(e){o("blobworkers",b===e.data),i()},a.onerror=n,c=setTimeout(n,200),a.postMessage(b)}catch(u){n()}})});