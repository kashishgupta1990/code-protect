/*!
{
  "name": "Video Loop Attribute",
  "property": "videoloop",
  "tags": ["video", "media"]
}
!*/

define(["Modernizr","createElement"],function(e,o){e.addTest("videoloop","loop"in o("video"))});