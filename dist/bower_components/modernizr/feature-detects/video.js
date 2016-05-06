/*!
{
  "name": "HTML5 Video",
  "property": "video",
  "caniuse": "video",
  "tags": ["html5"],
  "knownBugs": [
    "Without QuickTime, `Modernizr.video.h264` will be `undefined`; https://github.com/Modernizr/Modernizr/issues/546"
  ],
  "polyfills": [
    "html5media",
    "mediaelementjs",
    "sublimevideo",
    "videojs",
    "leanbackplayer",
    "videoforeverybody"
  ]
}
!*/

define(["Modernizr","createElement"],function(e,c){e.addTest("video",function(){var e=c("video"),a=!1;try{(a=!!e.canPlayType)&&(a=new Boolean(a),a.ogg=e.canPlayType('video/ogg; codecs="theora"').replace(/^no$/,""),a.h264=e.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/,""),a.webm=e.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/,""),a.vp9=e.canPlayType('video/webm; codecs="vp9"').replace(/^no$/,""),a.hls=e.canPlayType('application/x-mpegURL; codecs="avc1.42E01E"').replace(/^no$/,""))}catch(o){}return a})});