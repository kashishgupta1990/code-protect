describe("Function",function(){"use strict";describe("bind",function(){function t(){return Array.prototype.forEach.call(arguments,function(t){this.push(t)},this),this}var n,e;e={push:function(t){this.a.push(t)}},beforeEach(function(){n=[],e.a=[]}),it("binds properly without a context",function(){var t;e.func=function(){t=this}.bind(),e.func(),expect(t).toBe(function(){return this}.call())}),it("binds properly without a context, and still supplies bound arguments",function(){var t,n;e.func=function(){t=Array.prototype.slice.call(arguments),n=this}.bind(void 0,1,2,3),e.func(1,2,3),expect(t).toEqual([1,2,3,1,2,3]),expect(n).toBe(function(){return this}.call())}),it("binds a context properly",function(){e.func=t.bind(n),e.func(1,2,3),expect(n).toEqual([1,2,3]),expect(e.a).toEqual([])}),it("binds a context and supplies bound arguments",function(){e.func=t.bind(n,1,2,3),e.func(4,5,6),expect(n).toEqual([1,2,3,4,5,6]),expect(e.a).toEqual([])}),it("returns properly without binding a context",function(){e.func=function(){return this}.bind();var t=e.func();expect(t).toBe(function(){return this}.call())}),it("returns properly without binding a context, and still supplies bound arguments",function(){var t;e.func=function(){return t=this,Array.prototype.slice.call(arguments)}.bind(void 0,1,2,3),n=e.func(1,2,3),expect(t).toBe(function(){return this}.call()),expect(n).toEqual([1,2,3,1,2,3])}),it("returns properly while binding a context properly",function(){var c;e.func=t.bind(n),c=e.func(1,2,3),expect(c).toBe(n),expect(c).not.toBe(e)}),it("returns properly while binding a context and supplies bound arguments",function(){var c;e.func=t.bind(n,1,2,3),c=e.func(4,5,6),expect(c).toBe(n),expect(c).not.toBe(e)}),it("passes the correct arguments as a constructor",function(){var t,n={name:"Correct"};e.func=function(t){return t}.bind({name:"Incorrect"}),t=new e.func(n),expect(t).toBe(n)}),it("returns the return value of the bound function when called as a constructor",function(){var t=[1,2,3],n=function(){return t}.bind(null),e=new n;expect(e).toBe(t)}),it("returns the correct value if constructor returns primitive",function(){var t=[1,2,3],n=function(){return t}.bind(null),e=new n;expect(e).toBe(t),t={},e=new n,expect(e).toBe(t),t=function(){},e=new n,expect(e).toBe(t),t="asdf",e=new n,expect(e).not.toBe(t),t=null,e=new n,expect(e).not.toBe(t),t=!0,e=new n,expect(e).not.toBe(t),t=1,e=new n,expect(e).not.toBe(t)}),it('returns the value that instance of original "class" when called as a constructor',function(){var t=function(t){this.name=t||"A"},n=t.bind(null,"B"),e=new n;expect(e instanceof t).toBe(!0),expect(e instanceof n).toBe(!0)})})});