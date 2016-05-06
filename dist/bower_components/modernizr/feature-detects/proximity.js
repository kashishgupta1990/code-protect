/*!
{
  "authors": ["Cătălin Mariș"],
  "caniuse": "proximity",
  "name": "Proximity API",
  "notes": [{
    "name": "MDN documentation",
    "href": "https://developer.mozilla.org/en-US/docs/Web/API/Proximity_Events"
  },{
    "name": "W3C specification",
    "href": "https://www.w3.org/TR/proximity/"
  }],
  "property": "proximity",
  "tags": ["events", "proximity"]
}
!*/

define(["Modernizr","addTest"],function(i,e){i.addAsyncTest(function(){function i(){clearTimeout(n),window.removeEventListener("deviceproximity",i),e("proximity",!0)}var n,o=300;"ondeviceproximity"in window&&"onuserproximity"in window?(window.addEventListener("deviceproximity",i),n=setTimeout(function(){window.removeEventListener("deviceproximity",i),e("proximity",!1)},o)):e("proximity",!1)})});