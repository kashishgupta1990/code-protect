/*!
{
  "name": "Font Ligatures",
  "property": "ligatures",
  "caniuse": "font-feature",
  "notes": [{
    "name": "Cross-browser Web Fonts",
    "href": "http://www.sitepoint.com/cross-browser-web-fonts-part-3/"
  }]
}
!*/

define(["Modernizr","testAllProps"],function(e,t){e.addTest("ligatures",t("fontFeatureSettings",'"liga" 1'))});