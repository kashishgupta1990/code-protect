/*!
{
  "name": "XDomainRequest",
  "property": "xdomainrequest",
  "tags": ["cors", "xdomainrequest", "ie9", "ie8"],
  "authors": ["Ivan Pan (@hypotenuse)"],
  "notes": [
  {
    "name": "MDN documentation",
    "href": "https://developer.mozilla.org/en-US/docs/Web/API/XDomainRequest"
  },
  {
    "name": "MSDN documentation",
    "href": "https://msdn.microsoft.com/library/ie/cc288060.aspx/"
  }]
}
!*/

define(["Modernizr"],function(e){e.addTest("xdomainrequest","XDomainRequest"in window)});