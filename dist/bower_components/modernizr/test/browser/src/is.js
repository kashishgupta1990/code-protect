describe("is",function(){var e,t;before(function(n){var c=requirejs.config({context:Math.random().toString().slice(2),baseUrl:"../src",paths:{cleanup:"../test/cleanup"}});c(["is","cleanup"],function(c,o){t=c,e=o,n()})}),it("is a function",function(){expect(t).to.be.a("function")}),it("recognizes all types",function(){var e=t(void 0,"undefined"),n=t(function(){},"function"),c=t(!0,"boolean"),o=t(null,"object"),i=t("1","string");expect(e).to.be(!0),expect(n).to.be(!0),expect(c).to.be(!0),expect(o).to.be(!0),expect(i).to.be(!0)}),after(function(){e()})});