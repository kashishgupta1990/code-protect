/*!
{
  "name": "Low Bandwidth Connection",
  "property": "lowbandwidth",
  "tags": ["network"],
  "builderAliases": ["network_connection"]
}
!*/

define(["Modernizr"],function(t){t.addTest("lowbandwidth",function(){var t=navigator.connection||{type:0};return 3==t.type||4==t.type||/^[23]g$/.test(t.type)})});