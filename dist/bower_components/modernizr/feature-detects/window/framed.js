/*!
{
  "name": "Framed window",
  "property": "framed",
  "tags": ["window"],
  "builderAliases": ["window_framed"]
}
!*/

define(["Modernizr"],function(o){o.addTest("framed",window.location!=top.location)});