/*!
{
  "name": "onInput Event",
  "property": "oninput",
  "notes": [{
    "name": "MDN article",
    "href": "https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers.oninput"
  },{
    "name": "WHATWG spec",
    "href": "https://html.spec.whatwg.org/multipage/forms.html#common-input-element-attributes"
  },{
    "name": "Detecting onInput support",
    "href": "http://danielfriesen.name/blog/2010/02/16/html5-browser-maze-oninput-support"
  }],
  "authors": ["Patrick Kettner"],
  "tags": ["event"]
}
!*/

define(["Modernizr","docElement","createElement","testStyles","hasEvent"],function(e,t,n,i,r){e.addTest("oninput",function(){var e,i=n("input");if(i.setAttribute("oninput","return"),r("oninput",t)||"function"==typeof i.oninput)return!0;try{var o=document.createEvent("KeyboardEvent");e=!1;var u=function(t){e=!0,t.preventDefault(),t.stopPropagation()};o.initKeyEvent("keypress",!0,!0,window,!1,!1,!1,!1,0,"e".charCodeAt(0)),t.appendChild(i),i.addEventListener("input",u,!1),i.focus(),i.dispatchEvent(o),i.removeEventListener("input",u,!1),t.removeChild(i)}catch(a){e=!1}return e})});