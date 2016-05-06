/*!
{
  "name": "Low Battery Level",
  "property": "lowbattery",
  "tags": ["hardware", "mobile"],
  "builderAliases": ["battery_level"],
  "authors": ["Paul Sayre"],
  "notes": [{
    "name": "MDN Docs",
    "href": "https://developer.mozilla.org/en-US/docs/Web/API/Navigator/battery"
  }]
}
!*/

define(["Modernizr","prefixed"],function(e,r){e.addTest("lowbattery",function(){var e=.2,n=r("battery",navigator);return!!(n&&!n.charging&&n.level<=e)})});