describe("dropdown",function(){function e(e){e=e?l[e]:l["default"],angular.extend(t,e.scope),$(e.element).appendTo(n);var r=$(e.element).appendTo(n);return r=o(r)(t),t.$digest(),c.flush(),r}var t,n,o,c;beforeEach(module("$strap.directives")),beforeEach(inject(function(e,l,r,i){t=l,o=r,c=i,n=$('<div id="sandbox"></div>').appendTo($("body"))})),afterEach(function(){n.remove(),t.$destroy()});var l={"default":{element:'<button type="button" href="#" class="dropdown btn" bs-dropdown="items">Dropdown <b class="caret"></b></button>',scope:{click:function(){dump("click")},items:[{text:"Another action",href:"#A"},{text:"Something else here",href:"#B"},{divider:!0},{text:"Separated link",href:"#",click:"click(1)"}]}},submenu:{element:'<button type="button" href="#" class="dropdown btn" bs-dropdown="items">Dropdown <b class="caret"></b></button>',scope:{click:function(){},items:[{text:"Another action",href:"#A"},{text:"Something else here",href:"#B"},{divider:!0},{text:"Separated link",href:"#",click:"click(1)",submenu:[{text:"Second level link",href:"#"},{text:"Second level link 2",href:"#",submenu:[{text:"Second level link",href:"#"},{text:"Second level link 2",href:"#",click:"click(2)"}]}]}]}}};it('should add "data-toggle" attr & "dropdown-toggle" class for you',function(){var t=e();expect(t.attr("data-toggle")).toBe("dropdown"),expect(t.hasClass("dropdown-toggle")).toBe(!0)}),it("should correctly build the dropdown ul element",function(){var n=e(),o=n.next("ul");expect(o.length).toBe(1),expect(o.attr("class")).toBe("dropdown-menu ng-scope"),expect(o.children("li").length).toBe(t.items.length)}),it('should correctly set "href" & "ng-click" attrs',function(){var n=e("submenu"),o=n.next("ul");expect(o.find("li:first a").attr("href")).toBe(t.items[0].href),expect(o.find("li:eq(3) a").attr("ng-click")).toBe(t.items[3].click)}),it("should support ngClick directive",function(){var n=e("submenu"),o=n.next("ul"),c=spyOn(t,"click").andCallThrough();o.find("li:eq(3) a").trigger("click"),expect(c).toHaveBeenCalled()}),describe("submenus",function(){it("should correctly build submenus",function(){var t=e("submenu"),n=t.next("ul");expect(n.find("ul.dropdown-menu").length).toBe(2)})})});