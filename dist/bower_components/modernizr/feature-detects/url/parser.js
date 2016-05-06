/*!
{
  "name": "URL parser",
  "property": "urlparser",
  "notes": [{
    "name": "URL",
    "href": "https://dvcs.w3.org/hg/url/raw-file/tip/Overview.html"
  }],
  "polyfills": ["urlparser"],
  "authors": ["Ron Waldon (@jokeyrhyme)"],
  "tags": ["url"]
}
!*/

define(["Modernizr"],function(r){r.addTest("urlparser",function(){var r;try{return r=new URL("http://modernizr.com/"),"http://modernizr.com/"===r.href}catch(e){return!1}})});