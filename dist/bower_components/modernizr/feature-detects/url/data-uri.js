/*!
{
  "name": "Data URI",
  "property": "datauri",
  "caniuse": "datauri",
  "tags": ["url"],
  "builderAliases": ["url_data_uri"],
  "async": true,
  "notes": [{
    "name": "Wikipedia article",
    "href": "https://en.wikipedia.org/wiki/Data_URI_scheme"
  }],
  "warnings": ["Support in Internet Explorer 8 is limited to images and linked resources like CSS files, not HTML files"]
}
!*/

define(["Modernizr","addTest"],function(A,a){A.addAsyncTest(function(){function n(){var n=new Image;n.onerror=function(){a("datauri",!0),A.datauri=new Boolean(!0),A.datauri.over32kb=!1},n.onload=function(){a("datauri",!0),A.datauri=new Boolean(!0),A.datauri.over32kb=1==n.width&&1==n.height};for(var e="R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==";e.length<33e3;)e="\r\n"+e;n.src="data:image/gif;base64,"+e}-1!==navigator.userAgent.indexOf("MSIE 7.")&&setTimeout(function(){a("datauri",!1)},10);var e=new Image;e.onerror=function(){a("datauri",!1)},e.onload=function(){1==e.width&&1==e.height?n():a("datauri",!1)},e.src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw=="})});