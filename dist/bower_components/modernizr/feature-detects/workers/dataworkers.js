/*!
{
  "name": "Workers from Data URIs",
  "property": "dataworkers",
  "tags": ["performance", "workers"],
  "builderAliases": ["workers_dataworkers"],
  "notes": [{
    "name": "W3C Reference",
    "href": "https://www.w3.org/TR/workers/"
  }],
  "knownBugs": ["This test may output garbage to console."],
  "authors": ["Jussi Kalliokoski"],
  "async": true
}
!*/

define(["Modernizr","addTest"],function(t,e){t.addAsyncTest(function(){try{var t="Modernizr",n=new Worker("data:text/javascript;base64,dGhpcy5vbm1lc3NhZ2U9ZnVuY3Rpb24oZSl7cG9zdE1lc3NhZ2UoZS5kYXRhKX0=");n.onmessage=function(a){n.terminate(),e("dataworkers",t===a.data),n=null},n.onerror=function(){e("dataworkers",!1),n=null},setTimeout(function(){e("dataworkers",!1)},200),n.postMessage(t)}catch(a){setTimeout(function(){e("dataworkers",!1)},0)}})});