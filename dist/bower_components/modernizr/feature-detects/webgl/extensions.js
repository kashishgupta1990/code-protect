/*!
{
  "name": "WebGL Extensions",
  "property": "webglextensions",
  "tags": ["webgl", "graphics"],
  "builderAliases": ["webgl_extensions"],
  "async" : true,
  "authors": ["Ilmari Heikkinen"],
  "knownBugs": [],
  "notes": [{
    "name": "Kronos extensions registry",
    "href": "http://www.khronos.org/registry/webgl/extensions/"
  }]
}
!*/

define(["Modernizr","createElement","test/webgl"],function(e,n){e.addAsyncTest(function(){if(e.webglextensions=new Boolean(!1),e.webgl){var t,o,i;try{t=n("canvas"),o=t.getContext("webgl")||t.getContext("experimental-webgl"),i=o.getSupportedExtensions()}catch(l){return}void 0!==o&&(e.webglextensions=new Boolean(!0));for(var s=-1,g=i.length;++s<g;)e.webglextensions[i[s]]=!0;t=void 0}})});