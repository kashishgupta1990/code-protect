beforeEach(function(){this.addMatchers({toExactlyMatch:function(t){var r,e,n,a,c,o=this.actual,u=function(t){var r=[];for(c in t)t.hasOwnProperty(c)&&r.push(c);return r};if(r=u(o),e=u(t),n=r.length,n!==e.length)return!1;for(a=0;n>a;a++)c=r[a],expect(c).toEqual(e[a]),expect(o[c]).toEqual(t[c]);return!0}})});