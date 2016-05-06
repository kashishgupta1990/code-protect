/*!
{
  "name": "Emoji",
  "property": "emoji"
}
!*/

define(["Modernizr","createElement","test/canvastext"],function(e,t){e.addTest("emoji",function(){if(!e.canvastext)return!1;var a=window.devicePixelRatio||1,n=12*a,i=t("canvas"),l=i.getContext("2d");return l.fillStyle="#f00",l.textBaseline="top",l.font="32px Arial",l.fillText("🐨",0,0),0!==l.getImageData(n,n,1,1).data[0]})});