describe("Object",function(){"use strict";describe("Object.keys",function(){var e={str:"boz",obj:{},arr:[],bool:!0,num:42,"null":null,undefined:void 0},t=[];for(var n in e)t.push(n);var r=Object.keys(e);it("should have correct length",function(){expect(r.length).toBe(7)}),it("should return an Array",function(){expect(Array.isArray(r)).toBe(!0)}),it("should return names which are own properties",function(){r.forEach(function(t){expect(e.hasOwnProperty(t)).toBe(!0)})}),it("should return names which are enumerable",function(){r.forEach(function(e){expect(t.indexOf(e)).toNotBe(-1)})}),it("should throw error for non object",function(){var e={};expect(function(){try{Object.keys(42)}catch(t){throw e}}).toThrow(e)})}),describe("Object.isExtensible",function(){var e={};it("should return true if object is extensible",function(){expect(Object.isExtensible(e)).toBe(!0)}),it("should return false if object is not extensible",function(){expect(Object.isExtensible(Object.preventExtensions(e))).toBe(!1)}),it("should return false if object is seal",function(){expect(Object.isExtensible(Object.seal(e))).toBe(!1)}),it("should return false if object is freeze",function(){expect(Object.isExtensible(Object.freeze(e))).toBe(!1)}),it("should throw error for non object",function(){var e={};expect(function(){try{Object.isExtensible(42)}catch(t){throw e}}).toThrow(e)})}),describe("Object.defineProperty",function(){var e;beforeEach(function(){e={},Object.defineProperty(e,"name",{value:"Testing",configurable:!0,enumerable:!0,writable:!0})}),it("should return the initial value",function(){expect(e.hasOwnProperty("name")).toBeTruthy(),expect(e.name).toBe("Testing")}),it("should be setable",function(){e.name="Other",expect(e.name).toBe("Other")}),it("should return the parent initial value",function(){var t=Object.create(e,{});expect(t.name).toBe("Testing"),expect(t.hasOwnProperty("name")).toBeFalsy()}),it("should not override the parent value",function(){var t=Object.create(e,{});Object.defineProperty(t,"name",{value:"Other"}),expect(e.name).toBe("Testing"),expect(t.name).toBe("Other")}),it("should throw error for non object",function(){expect(function(){Object.defineProperty(42,"name",{})}).toThrow()})}),describe("Object.getOwnPropertyDescriptor",function(){it("should return undefined because the object does not own the property",function(){var e=Object.getOwnPropertyDescriptor({},"name");expect(e).toBeUndefined()}),it("should return a data descriptor",function(){var e=Object.getOwnPropertyDescriptor({name:"Testing"},"name");expect(e).not.toBeUndefined(),expect(e.value).toBe("Testing"),expect(e.writable).toBe(!0),expect(e.enumerable).toBe(!0),expect(e.configurable).toBe(!0)}),it("should return undefined because the object does not own the property",function(){var e=Object.getOwnPropertyDescriptor(Object.create({name:"Testing"},{}),"name");expect(e).toBeUndefined()}),it("should return a data descriptor",function(){var e=Object.create({},{name:{value:"Testing",configurable:!0,enumerable:!0,writable:!0}}),t=Object.getOwnPropertyDescriptor(e,"name");expect(t).not.toBeUndefined(),expect(t.value).toBe("Testing"),expect(t.writable).toBe(!0),expect(t.enumerable).toBe(!0),expect(t.configurable).toBe(!0)}),it("should throw error for non object",function(){expect(function(){Object.getOwnPropertyDescriptor(42,"name")}).toThrow()})})});