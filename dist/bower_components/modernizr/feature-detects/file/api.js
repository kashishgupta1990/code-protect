/*!
{
  "name": "File API",
  "property": "filereader",
  "caniuse": "fileapi",
  "notes": [{
    "name": "W3C Working Draft",
    "href": "https://www.w3.org/TR/FileAPI/"
  }],
  "tags": ["file"],
  "builderAliases": ["file_api"],
  "knownBugs": ["Will fail in Safari 5 due to its lack of support for the standards defined FileReader object"]
}
!*/

define(["Modernizr"],function(e){e.addTest("filereader",!!(window.File&&window.FileList&&window.FileReader))});