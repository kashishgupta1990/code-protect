/*!
{
  "name": "Audio Loop Attribute",
  "property": "audioloop",
  "tags": ["audio", "media"]
}
!*/

define(["Modernizr","createElement"],function(e,o){e.addTest("audioloop","loop"in o("audio"))});