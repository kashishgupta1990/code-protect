/*!
{
  "name": "Video Preload Attribute",
  "property": "videopreload",
  "tags": ["video", "media"]
}
!*/

define(["Modernizr","createElement"],function(e,d){e.addTest("videopreload","preload"in d("video"))});