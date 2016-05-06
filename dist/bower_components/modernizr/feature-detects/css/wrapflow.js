/*!
{
  "name": "CSS wrap-flow",
  "property": "wrapflow",
  "tags": ["css"],
  "notes": [
    {
      "name": "W3C Exclusions spec",
      "href": "https://www.w3.org/TR/css3-exclusions"
    },
    {
      "name": "Example by Adobe",
      "href": "http://html.adobe.com/webstandards/cssexclusions"
    }
  ]
}
!*/

define(["Modernizr","prefixed","docElement","createElement","isSVG"],function(e,n,t,i,r){e.addTest("wrapflow",function(){var e=n("wrapFlow");if(!e||r)return!1;var d=e.replace(/([A-Z])/g,function(e,n){return"-"+n.toLowerCase()}).replace(/^ms-/,"-ms-"),p=i("div"),a=i("div"),o=i("span");a.style.cssText="position: absolute; left: 50px; width: 100px; height: 20px;"+d+":end;",o.innerText="X",p.appendChild(a),p.appendChild(o),t.appendChild(p);var l=o.offsetLeft;return t.removeChild(p),a=o=p=void 0,150==l})});