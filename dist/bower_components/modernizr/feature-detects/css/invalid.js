/*!
{
  "name": "CSS :invalid pseudo-class",
  "property": "cssinvalid",
  "notes": [{
    "name": "MDN documentation",
    "href": "https://developer.mozilla.org/en-US/docs/Web/CSS/:invalid"
  }]
}
!*/

define(["Modernizr","testStyles","createElement"],function(i,n,e){i.addTest("cssinvalid",function(){return n("#modernizr input{height:0;border:0;padding:0;margin:0;width:10px} #modernizr input:invalid{width:50px}",function(i){var n=e("input");return n.required=!0,i.appendChild(n),n.clientWidth>10})})});