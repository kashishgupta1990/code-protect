describe("inputElem",function(){var e,n;before(function(t){var c=requirejs.config({context:Math.random().toString().slice(2),baseUrl:"../src",paths:{cleanup:"../test/cleanup"}});c(["inputElem","cleanup"],function(c,i){e=c,n=i,t()})}),it("returns an input element",function(){expect(e.nodeName).to.equal("INPUT")}),after(function(){n()})});