describe("prefixed()",function(){function e(e,r){var t,o=["Moz","Khtml","Webkit","O","ms"],n=["moz","khtml","webkit","o","ms"],i=document.createElement("div"),c=e.charAt(0).toUpperCase()+e.slice(1);if(r){if(e in r)return e;for(t=n.length;t--;)if(n[t]+c in r)return n[t]+c}else{if(e in i.style)return e;for(t=o.length;t--;)if(o[t]+c in i.style)return o[t]+c}return!1}function r(e){return e.replace(/([A-Z])/g,function(e,r){return"-"+r.toLowerCase()}).replace(/^ms-/,"-ms-")}var t=["transition","backgroundSize","boxSizing","borderImage","borderRadius","boxShadow","columnCount"],o=[{prop:"requestAnimationFrame",obj:window},{prop:"querySelectorAll",obj:document},{prop:"matchesSelector",obj:document.createElement("div")}];_.forEach(t,function(r){it("results for "+r+" match the homebaked prefix finder",function(){expect(Modernizr.prefixed(r)).to.equal(e(r))})}),_.forEach(t,function(t){it("results for "+t+" match the homebaked prefix finder",function(){expect(Modernizr.prefixed(r(t))).to.equal(e(t))})}),_.forEach(o,function(r){it("results for "+r.prop+" match the homebaked prefix finder",function(){var t=Modernizr.prefixed(r.prop,r.obj,!1),o=e(r.prop,r.obj);expect(t).to[_.isString(o)?"contain":"equal"](o)})})});