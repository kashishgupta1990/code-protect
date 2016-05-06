describe("uiDate",function(){"use strict";var e;e=function(e,t){e.datepicker("setDate",t),$.datepicker._selectDate(e)},beforeEach(module("ui.directives")),describe("simple use on input element",function(){it("should have a date picker attached",function(){inject(function(e,t){var n;n=e("<input ui-date/>")(t),expect(n.datepicker()).toBeDefined()})}),it("should be able to get the date from the model",function(){inject(function(e,t){var n,i;n=new Date(2010,12,1),i=e("<input ui-date ng-model='x'/>")(t),t.$apply(function(){t.x=n}),expect(i.datepicker("getDate")).toEqual(n)})}),it("should put the date in the model",function(){inject(function(t,n){var i,o;i=new Date(2010,12,1),o=t("<input ui-date ng-model='x'/>")(n),n.$apply(),e(o,i),expect(n.x).toEqual(i)})}),it("should blur the input element after selecting a date",function(){inject(function(t,n){var i,o;i=new Date(2010,12,1),o=t("<input ui-date ng-model='x'/>")(n),n.$apply(),$(document.body).append(o),o.focus(),expect(document.activeElement).toEqual(o[0]),e(o,i),expect(document.activeElement).not.toEqual(o[0]),o.remove()})})}),describe("when model is not a Date",function(){var e,t;beforeEach(inject(function(n,i){e=n('<input ui-date="{dateFormat: \'yy-mm-dd\'}" ng-model="x"/>')(i),t=i})),it("should not freak out when the model is null",function(){t.$apply(function(){t.x=null}),expect(e.datepicker("getDate")).toBe(null)}),it("should not freak out when the model is undefined",function(){t.$apply(function(){t.x=void 0}),expect(e.datepicker("getDate")).toBe(null)}),it("should throw an error if you try to pass in a boolean when the model is false",function(){expect(function(){t.$apply(function(){t.x=!1})}).toThrow()})}),it("should update the input field correctly on a manual update",function(){inject(function(e,t){var n="2012-08-17",i=$.datepicker.parseDate("yy-mm-dd",n),o=e('<input ui-date="{dateFormat: \'yy-mm-dd\'}" ng-model="x"/>')(t);t.$apply(function(){t.x=i}),n="2012-8-01",i=$.datepicker.parseDate("yy-mm-dd",n),o.val(n),o.trigger("change"),expect(o.datepicker("getDate")).toEqual(i),expect(o.val()).toEqual("2012-08-01"),t.$digest(),expect(t.x).toEqual(i)})}),describe("use with user events",function(){it("should call the user onSelect event within a scope.$apply context",function(){inject(function(t,n){var i=!1;n.myDateSelected=function(){n.watchMe=!0},n.$watch("watchMe",function(e){e&&(i=!0)});var o=new Date(2012,9,11),a=t('<input ui-date="{onSelect: myDateSelected}" ng-model="x"/>')(n);n.$apply(),e(a,o),expect(i).toBeTruthy()})})}),describe("use with ng-required directive",function(){it("should be invalid initially",function(){inject(function(e,t){var n,i;n=new Date(2010,12,1),i=e("<input ui-date ng-model='x' ng-required='true' />")(t),t.$apply(),expect(i.hasClass("ng-invalid")).toBeTruthy()})}),it("should be valid if model has been specified",function(){inject(function(e,t){var n,i;n=new Date(2010,12,1),i=e("<input ui-date ng-model='x' ng-required='true' />")(t),t.$apply(function(){t.x=n}),expect(i.hasClass("ng-valid")).toBeTruthy()})}),it("should be valid after the date has been picked",function(){inject(function(t,n){var i,o;i=new Date(2010,12,1),o=t("<input ui-date ng-model='x' ng-required='true' />")(n),n.$apply(),e(o,i),expect(o.hasClass("ng-valid")).toBeTruthy()})})}),describe("simple use on a div element",function(){it("should have a date picker attached",function(){inject(function(e,t){var n;n=e("<div ui-date></div>")(t),expect(n.datepicker()).toBeDefined()})}),it("should be able to get the date from the model",function(){inject(function(e,t){var n,i;n=new Date(2010,12,1),i=e("<div ui-date ng-model='x'></div>")(t),t.$apply(function(){t.x=n}),expect(i.datepicker("getDate")).toEqual(n)})}),it("should put the date in the model",function(){inject(function(t,n){var i,o;i=new Date(2010,12,1),o=t("<div ui-date ng-model='x'></div>")(n),n.$apply(),e(o,i),expect(n.x).toEqual(i)})})}),describe("use with ng-required directive",function(){it("should be invalid initially",function(){inject(function(e,t){var n=e("<div ui-date ng-model='x' ng-required='true' ></div>")(t);t.$apply(),expect(n.hasClass("ng-invalid")).toBeTruthy()})}),it("should be valid if model has been specified",function(){inject(function(e,t){var n,i;n=new Date(2010,12,1),i=e("<div ui-date ng-model='x' ng-required='true' ></div>")(t),t.$apply(function(){t.x=n}),expect(i.hasClass("ng-valid")).toBeTruthy()})}),it("should be valid after the date has been picked",function(){inject(function(t,n){var i,o;i=new Date(2010,12,1),o=t("<div ui-date ng-model='x' ng-required='true' ></div>")(n),n.$apply(),e(o,i),expect(o.hasClass("ng-valid")).toBeTruthy()})})}),describe("when attribute options change",function(){it("should watch attribute and update date widget accordingly",function(){inject(function(e,t){var n;t.config={minDate:5},n=e("<input ui-date='config' ng-model='x'/>")(t),t.$apply(),expect(n.datepicker("option","minDate")).toBe(5),t.$apply(function(){t.config.minDate=10}),expect(n.datepicker("option","minDate")).toBe(10)})})})}),describe("uiDateFormat",function(){beforeEach(module("ui.directives")),describe("$formatting",function(){it("should parse the date correctly from an ISO string",function(){inject(function(e,t){var n,i,o;n=new Date(2012,8,17),i=n.toISOString(),o=e('<input ui-date-format ng-model="x"/>')(t),t.x=i,t.$digest(),expect(t.x).toEqual(i),expect(o.controller("ngModel").$viewValue).toEqual(n)})}),it("should parse the date correctly from a custom string",function(){inject(function(e,t){var n=new Date(2012,9,11),i="Thursday, 11 October, 2012",o=e('<input ui-date-format="DD, d MM, yy" ng-model="x"/>')(t);t.x=i,t.$digest(),expect(t.x).toEqual(i),expect(o.controller("ngModel").$viewValue).toEqual(n)})}),it("should handle unusual model values",function(){inject(function(e,t){var n=e('<input ui-date-format ng-model="x"/>')(t);t.x=!1,t.$digest(),expect(t.x).toEqual(!1),expect(n.controller("ngModel").$viewValue).toEqual(null),t.x=void 0,t.$digest(),expect(t.x).toBeUndefined(),expect(n.controller("ngModel").$viewValue).toEqual(null),t.x=null,t.$digest(),expect(t.x).toBeNull(),expect(n.controller("ngModel").$viewValue).toEqual(null)})})}),describe("$parsing",function(){it("should format a selected date correctly to an ISO string",function(){inject(function(e,t){var n=new Date(2012,8,17),i=n.toISOString(),o=e('<input ui-date-format ng-model="x"/>')(t);t.$digest(),o.controller("ngModel").$setViewValue(n),expect(t.x).toEqual(i),expect(o.controller("ngModel").$viewValue).toEqual(n)})}),it("should format a selected date correctly to a custom string",function(){inject(function(e,t){var n="DD, d MM, yy",i=new Date(2012,9,11),o="Thursday, 11 October, 2012",a=e('<input ui-date-format="'+n+'" ng-model="x"/>')(t);t.$digest(),a.controller("ngModel").$setViewValue(i),expect(t.x).toEqual(o),expect(a.controller("ngModel").$viewValue).toEqual(i)})})}),describe("with uiConfig",function(){var e,t,n,i="DD, d MM, yy",o=new Date(2012,9,11),a="Thursday, 11 October, 2012",u=o.toISOString();beforeEach(inject(["$compile","$rootScope","ui.config",function(i,o,a){n=a,e=i('<input ui-date-format ng-model="x"/>')(o),t=o}])),it("use ISO if not config value",function(){t.x=u,t.$digest(),expect(e.controller("ngModel").$viewValue).toEqual(o)}),it("use format value if config given",function(){n.dateFormat=i,t.x=a,t.$digest(),expect(e.controller("ngModel").$viewValue).toEqual(o)})})});