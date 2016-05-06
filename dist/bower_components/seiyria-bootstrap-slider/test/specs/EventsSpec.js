describe("Event Tests",function(){var e,t,n;beforeEach(function(){t=!1,n=document.createEvent("MouseEvents")}),describe("JQuery version",function(){beforeEach(function(){e=$("#testSlider2").slider({value:1})}),afterEach(function(){e&&(e.slider("destroy"),e=null)}),describe("Mouse Events",function(){it("'slideStart' event is triggered properly and can be binded to",function(){e.on("slideStart",function(){t=!0}),e.data("slider")._mousedown(n),expect(t).toBeTruthy()}),it("'slide' event is triggered properly and can be binded to",function(){e.on("slide",function(){t=!0}),e.data("slider")._mousemove(n),expect(t).toBeTruthy()}),it("'slide' event sets the right value on the input",function(){e.on("slide",function(){t=!0,expect(isNaN(e.val())).not.toBeTruthy()}),e.data("slider")._mousemove(n),expect(t).toBeTruthy()}),it("'slideStop' event is triggered properly and can be binded to",function(){e.on("slideStop",function(){t=!0}),e.data("slider")._mouseup(n),expect(t).toBeTruthy()}),it("slider should not have duplicate events after calling 'refresh'",function(){t=0,e.on("slideStop",function(){t+=1}),e.slider("refresh"),e.data("slider")._mouseup(),expect(t).toEqual(1)}),describe("Disabled Slider Event Tests",function(){beforeEach(function(){e.slider("disable")}),it("should not trigger 'slideStart' event when disabled",function(){e.on("slideStart",function(){t=!0}),e.data("slider")._mousedown(n),expect(t).not.toBeTruthy()}),it("should not trigger 'slide' event when disabled",function(){e.on("slide",function(){t=!0}),e.data("slider")._mousemove(n),expect(t).not.toBeTruthy()}),it("should not trigger 'slideStop' event when disabled",function(){e.on("slideStop",function(){t=!0}),e.data("slider")._mouseup(),expect(t).not.toBeTruthy()})})}),describe("Touch Events",function(){var n;beforeEach(function(){n=document.createEvent("Event");var e=document.createEvent("MouseEvents");n.touches=[e],window.ontouchstart=!0}),afterEach(function(){window.ontouchstart=null}),it("'slideStart' event is triggered properly and can be binded to",function(){n.initEvent("touchstart"),e.on("slideStart",function(){t=!0}),e.data("slider")._mousedown(n),expect(t).toBeTruthy()}),it("'slide' event is triggered properly and can be binded to",function(){n.initEvent("touchmove"),e.on("slide",function(){t=!0}),e.data("slider")._mousemove(n),expect(t).toBeTruthy()}),it("'slide' event sets the right value on the input",function(){n.initEvent("touchmove"),e.on("slide",function(){t=!0,expect(isNaN(e.val())).not.toBeTruthy()}),e.data("slider")._mousemove(n),expect(t).toBeTruthy()}),it("'slideStop' event is triggered properly and can be binded to",function(){n.initEvent("touchstop"),e.on("slideStop",function(){t=!0}),e.data("slider")._mouseup(),expect(t).toBeTruthy()}),it("slider should not have duplicate events after calling 'refresh'",function(){n.initEvent("touchstop"),t=0,e.on("slideStop",function(){t+=1}),e.slider("refresh"),e.data("slider")._mouseup(),expect(t).toEqual(1)}),it("slider should not bind multiple touchstart events after calling 'refresh'",function(){n.initEvent("touchstart",!0,!0),t=0,e.on("slideStart",function(){t+=1}),e.slider("refresh"),$(".slider .slider-handle").get(0).dispatchEvent(n),expect(t).toEqual(1)}),describe("Disabled Slider Event Tests",function(){beforeEach(function(){e.slider("disable")}),it("should not trigger 'slideStart' event when disabled",function(){n.initEvent("touchstart"),e.on("slideStart",function(){t=!0}),e.data("slider")._mousedown(n),expect(t).not.toBeTruthy()}),it("should not trigger 'slide' event when disabled",function(){n.initEvent("touchmove"),e.on("slide",function(){t=!0}),e.data("slider")._mousemove(n),expect(t).not.toBeTruthy()}),it("should not trigger 'slideStop' event when disabled",function(){n.initEvent("touchend"),e.on("slideStop",function(){t=!0}),e.data("slider")._mouseup(),expect(t).not.toBeTruthy()})})}),describe("Enabled/Disabled tests",function(){it("'slideDisabled' event is triggered properly and can be binded to",function(){e.on("slideDisabled",function(){t=!0}),e.slider("disable"),expect(t).toBeTruthy()}),it("'slideDisabled' event is triggered properly and can be binded to",function(){e.on("slideEnabled",function(){t=!0}),e.slider("disable"),e.slider("enable"),expect(t).toBeTruthy()}),it("'change' event is triggered properly and can be binded to",function(){e.on("change",function(){t=!0}),e.slider("setValue",3,!1,!0),expect(t).toBeTruthy()})})}),describe("CommonJS version",function(){describe("Event repetition tests",function(){var e,t;beforeEach(function(){e=new Slider("#testSlider2"),t=0}),afterEach(function(){e.destroy()}),it("'slide' event is triggered only once per slide action",function(){e.on("slide",function(){t++}),e._mousemove(n),expect(t).toEqual(1)}),it("'slideStart' event is triggered only once per slide action",function(){e.on("slideStart",function(){t++}),e._mousedown(n),expect(t).toEqual(1)}),it("'slideStop' event is triggered only once per slide action",function(){e.on("slideStop",function(){t++}),e._mouseup(n),expect(t).toEqual(1)}),it("'change' event is triggered only once per value change action",function(){e.on("change",function(){t++}),e.setValue(3,!1,!0),expect(t).toEqual(1)})})})});