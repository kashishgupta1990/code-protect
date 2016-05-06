/*!
{
  "name": "Quota Storage Management API",
  "property": "quotamanagement",
  "tags": ["storage"],
  "builderAliases": ["quota_management_api"],
  "notes": [{
    "name": "W3C Spec",
    "href": "https://www.w3.org/TR/quota-api/"
  }]
}
!*/

define(["Modernizr","prefixed"],function(e,r){e.addTest("quotamanagement",function(){var e=r("temporaryStorage",navigator),t=r("persistentStorage",navigator);return!(!e||!t)})});