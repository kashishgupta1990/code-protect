/*!
{
  "name": "input[directory] Attribute",
  "property": "directory",
  "authors": ["silverwind"],
  "tags": ["file", "input", "attribute"]
}
!*/

define(["Modernizr","createElement","domPrefixes"],function(e,r,i){e.addTest("fileinputdirectory",function(){var e=r("input"),n="directory";if(e.type="file",n in e)return!0;for(var t=0,f=i.length;f>t;t++)if(i[t]+n in e)return!0;return!1})});