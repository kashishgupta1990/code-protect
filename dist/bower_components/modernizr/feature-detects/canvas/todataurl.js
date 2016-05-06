/*!
{
  "name": "canvas.toDataURL type support",
  "property": ["todataurljpeg", "todataurlpng", "todataurlwebp"],
  "tags": ["canvas"],
  "builderAliases": ["canvas_todataurl_type"],
  "async" : false,
  "notes": [{
    "name": "MDN article",
    "href": "https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement.toDataURL"
  }]
}
!*/

define(["Modernizr","createElement","test/canvas"],function(a,t){var e=t("canvas");a.addTest("todataurljpeg",function(){return!!a.canvas&&0===e.toDataURL("image/jpeg").indexOf("data:image/jpeg")}),a.addTest("todataurlpng",function(){return!!a.canvas&&0===e.toDataURL("image/png").indexOf("data:image/png")}),a.addTest("todataurlwebp",function(){var t=!1;try{t=!!a.canvas&&0===e.toDataURL("image/webp").indexOf("data:image/webp")}catch(n){}return t})});