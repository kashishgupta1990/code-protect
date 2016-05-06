/*!
{
  "name" : "HTML5 Audio Element",
  "property": "audio",
  "tags" : ["html5", "audio", "media"]
}
!*/

define(["Modernizr","createElement"],function(a,e){a.addTest("audio",function(){var a=e("audio"),o=!1;try{(o=!!a.canPlayType)&&(o=new Boolean(o),o.ogg=a.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),o.mp3=a.canPlayType('audio/mpeg; codecs="mp3"').replace(/^no$/,""),o.opus=a.canPlayType('audio/ogg; codecs="opus"').replace(/^no$/,""),o.wav=a.canPlayType('audio/wav; codecs="1"').replace(/^no$/,""),o.m4a=(a.canPlayType("audio/x-m4a;")||a.canPlayType("audio/aac;")).replace(/^no$/,""))}catch(c){}return o})});