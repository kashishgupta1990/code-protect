/*!
{
  "name": "RTC Data Channel",
  "property": "datachannel",
  "notes": [{
    "name": "HTML5 Rocks! Article",
    "href": "http://www.html5rocks.com/en/tutorials/webrtc/datachannels/"
  }]
}
!*/

define(["Modernizr","prefixed","domPrefixes","test/webrtc/peerconnection"],function(e,n,r){e.addTest("datachannel",function(){if(!e.peerconnection)return!1;for(var n=0,t=r.length;t>n;n++){var i=window[r[n]+"RTCPeerConnection"];if(i){var o=new i({iceServers:[{url:"stun:0"}]});return"createDataChannel"in o}}return!1})});