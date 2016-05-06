/*!
{
  "name": "Canvas text",
  "property": "canvastext",
  "caniuse": "canvas-text",
  "tags": ["canvas", "graphics"],
  "polyfills": ["canvastext"]
}
!*/

define(["Modernizr","createElement","test/canvas"],function(t,e){t.addTest("canvastext",function(){return t.canvas===!1?!1:"function"==typeof e("canvas").getContext("2d").fillText})});