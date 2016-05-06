/*!
{
  "name": "Form input types",
  "property": "inputtypes",
  "caniuse": "forms",
  "tags": ["forms"],
  "authors": ["Mike Taylor"],
  "polyfills": [
    "jquerytools",
    "webshims",
    "h5f",
    "webforms2",
    "nwxforms",
    "fdslider",
    "html5slider",
    "galleryhtml5forms",
    "jscolor",
    "html5formshim",
    "selectedoptionsjs",
    "formvalidationjs"
  ]
}
!*/

define(["Modernizr","inputElem","docElement"],function(e,t,i){var l="search tel url email datetime date month week time datetime-local number range color".split(" "),a={};e.inputtypes=function(e){for(var l,n,d,r=e.length,o="1)",s=0;r>s;s++)t.setAttribute("type",l=e[s]),d="text"!==t.type&&"style"in t,d&&(t.value=o,t.style.cssText="position:absolute;visibility:hidden;",/^range$/.test(l)&&void 0!==t.style.WebkitAppearance?(i.appendChild(t),n=document.defaultView,d=n.getComputedStyle&&"textfield"!==n.getComputedStyle(t,null).WebkitAppearance&&0!==t.offsetHeight,i.removeChild(t)):/^(search|tel)$/.test(l)||(d=/^(url|email)$/.test(l)?t.checkValidity&&t.checkValidity()===!1:t.value!=o)),a[e[s]]=!!d;return a}(l)});