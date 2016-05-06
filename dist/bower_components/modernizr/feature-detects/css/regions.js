/*!
{
  "name": "CSS Regions",
  "caniuse": "css-regions",
  "authors": ["Mihai Balan"],
  "property": "regions",
  "tags": ["css"],
  "builderAliases": ["css_regions"],
  "notes": [{
    "name": "W3C Specification",
    "href": "https://www.w3.org/TR/css3-regions/"
  }]
}
!*/

define(["Modernizr","createElement","docElement","isSVG"],function(e,t,i,n){e.addTest("regions",function(){if(n)return!1;var d=e.prefixed("flowFrom"),r=e.prefixed("flowInto"),l=!1;if(!d||!r)return l;var o=t("iframe"),p=t("div"),g=t("div"),h=t("div"),f="modernizr_flow_for_regions_check";g.innerText="M",p.style.cssText="top: 150px; left: 150px; padding: 0px;",h.style.cssText="width: 50px; height: 50px; padding: 42px;",h.style[d]=f,p.appendChild(g),p.appendChild(h),i.appendChild(p);var s,a,c=g.getBoundingClientRect();return g.style[r]=f,s=g.getBoundingClientRect(),a=parseInt(s.left-c.left,10),i.removeChild(p),42==a?l=!0:(i.appendChild(o),c=o.getBoundingClientRect(),o.style[r]=f,s=o.getBoundingClientRect(),c.height>0&&c.height!==s.height&&0===s.height&&(l=!0)),g=h=p=o=void 0,l})});