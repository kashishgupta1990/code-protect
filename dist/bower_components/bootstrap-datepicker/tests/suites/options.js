module("Options",{setup:function(){},teardown:function(){$("#qunit-fixture *").each(function(){var e=$(this);"datepicker"in e.data()&&e.datepicker("remove")})}}),test("Autoclose",function(){var e,t=$("<input />").appendTo("#qunit-fixture").val("2012-03-05").datepicker({format:"yyyy-mm-dd",autoclose:!0}),i=t.data("datepicker"),a=i.picker;t.focus(),ok(a.is(":visible"),"Picker is visible"),e=a.find(".datepicker-days tbody td:nth(7)"),equal(e.text(),"4"),e.click(),ok(a.is(":not(:visible)"),"Picker is hidden"),datesEqual(i.dates[0],UTCDate(2012,2,4)),datesEqual(i.viewDate,UTCDate(2012,2,4))}),test("Custom date formatter functions",function(){var e,t=$("<input />").appendTo("#qunit-fixture").val("2015-09-18T00:00:00.000Z").datepicker({format:{toDisplay:function(e,t,i){var a=new Date(e);return a.setDate(a.getDate()-7),a.toISOString()},toValue:function(e,t,i){var a=new Date(e);return a.setDate(a.getDate()+7),new Date(a)}},autoclose:!0}),i=t.data("datepicker"),a=i.picker;equal(t.val(),"2015-09-18T00:00:00.000Z"),datesEqual(i.dates[0],UTCDate(2015,8,25)),datesEqual(i.viewDate,UTCDate(2015,8,25)),t.focus(),ok(a.is(":visible"),"Picker is visible"),e=a.find(".datepicker-days tbody td:nth(5)"),equal(e.text(),"4"),e.click(),ok(a.is(":not(:visible)"),"Picker is hidden"),equal(t.val(),"2015-08-28T00:00:00.000Z"),datesEqual(i.dates[0],UTCDate(2015,8,4)),datesEqual(i.viewDate,UTCDate(2015,8,4))}),test("Startview: year view (integer)",function(){var e=$("<input />").appendTo("#qunit-fixture").val("2012-03-05").datepicker({format:"yyyy-mm-dd",startView:1}),t=e.data("datepicker"),i=t.picker;e.focus(),ok(i.find(".datepicker-days").is(":not(:visible)"),"Days view hidden"),ok(i.find(".datepicker-months").is(":visible"),"Months view visible"),ok(i.find(".datepicker-years").is(":not(:visible)"),"Years view hidden"),ok(i.find(".datepicker-decades").is(":not(:visible)"),"Decades view hidden"),ok(i.find(".datepicker-centuries").is(":not(:visible)"),"Centuries view hidden")}),test("Startview: year view (string)",function(){var e=$("<input />").appendTo("#qunit-fixture").val("2012-03-05").datepicker({format:"yyyy-mm-dd",startView:"year"}),t=e.data("datepicker"),i=t.picker;e.focus(),ok(i.find(".datepicker-days").is(":not(:visible)"),"Days view hidden"),ok(i.find(".datepicker-months").is(":visible"),"Months view visible"),ok(i.find(".datepicker-years").is(":not(:visible)"),"Years view hidden"),ok(i.find(".datepicker-decades").is(":not(:visible)"),"Decades view hidden"),ok(i.find(".datepicker-centuries").is(":not(:visible)"),"Centuries view hidden")}),test("Startview: decade view (integer)",function(){var e=$("<input />").appendTo("#qunit-fixture").val("2012-03-05").datepicker({format:"yyyy-mm-dd",startView:2}),t=e.data("datepicker"),i=t.picker;e.focus(),ok(i.find(".datepicker-days").is(":not(:visible)"),"Days view hidden"),ok(i.find(".datepicker-months").is(":not(:visible)"),"Months view hidden"),ok(i.find(".datepicker-years").is(":visible"),"Years view visible"),ok(i.find(".datepicker-decades").is(":not(:visible)"),"Decades view hidden"),ok(i.find(".datepicker-centuries").is(":not(:visible)"),"Centuries view hidden")}),test("Startview: decade view (string)",function(){var e=$("<input />").appendTo("#qunit-fixture").val("2012-03-05").datepicker({format:"yyyy-mm-dd",startView:"decade"}),t=e.data("datepicker"),i=t.picker;e.focus(),ok(i.find(".datepicker-days").is(":not(:visible)"),"Days view hidden"),ok(i.find(".datepicker-months").is(":not(:visible)"),"Months view hidden"),ok(i.find(".datepicker-years").is(":visible"),"Years view visible"),ok(i.find(".datepicker-decades").is(":not(:visible)"),"Decades view hidden"),ok(i.find(".datepicker-centuries").is(":not(:visible)"),"Centuries view hidden")}),test("Startview: century view (integer)",function(){var e=$("<input />").appendTo("#qunit-fixture").val("2012-03-05").datepicker({format:"yyyy-mm-dd",startView:3}),t=e.data("datepicker"),i=t.picker;e.focus(),ok(i.find(".datepicker-days").is(":not(:visible)"),"Days view hidden"),ok(i.find(".datepicker-months").is(":not(:visible)"),"Months view hidden"),ok(i.find(".datepicker-years").is(":not(:visible)"),"Years view hidden"),ok(i.find(".datepicker-decades").is(":visible"),"Decades view visible"),ok(i.find(".datepicker-centuries").is(":not(:visible)"),"Centuries view hidden")}),test("Startview: century view (string)",function(){var e=$("<input />").appendTo("#qunit-fixture").val("2012-03-05").datepicker({format:"yyyy-mm-dd",startView:"century"}),t=e.data("datepicker"),i=t.picker;e.focus(),ok(i.find(".datepicker-days").is(":not(:visible)"),"Days view hidden"),ok(i.find(".datepicker-months").is(":not(:visible)"),"Months view hidden"),ok(i.find(".datepicker-years").is(":not(:visible)"),"Years view hidden"),ok(i.find(".datepicker-decades").is(":visible"),"Decades view visible"),ok(i.find(".datepicker-centuries").is(":not(:visible)"),"Centuries view hidden")}),test("Startview: millennium view (integer)",function(){var e=$("<input />").appendTo("#qunit-fixture").val("2012-03-05").datepicker({format:"yyyy-mm-dd",startView:4}),t=e.data("datepicker"),i=t.picker;e.focus(),ok(i.find(".datepicker-days").is(":not(:visible)"),"Days view hidden"),ok(i.find(".datepicker-months").is(":not(:visible)"),"Months view hidden"),ok(i.find(".datepicker-years").is(":not(:visible)"),"Years view hidden"),ok(i.find(".datepicker-decades").is(":not(:visible)"),"Decades view hidden"),ok(i.find(".datepicker-centuries").is(":visible"),"Centuries view visible")}),test("Startview: millennium view (string)",function(){var e=$("<input />").appendTo("#qunit-fixture").val("2012-03-05").datepicker({format:"yyyy-mm-dd",startView:"millennium"}),t=e.data("datepicker"),i=t.picker;e.focus(),ok(i.find(".datepicker-days").is(":not(:visible)"),"Days view hidden"),ok(i.find(".datepicker-months").is(":not(:visible)"),"Months view hidden"),ok(i.find(".datepicker-years").is(":not(:visible)"),"Years view hidden"),ok(i.find(".datepicker-decades").is(":not(:visible)"),"Decades view hidden"),ok(i.find(".datepicker-centuries").is(":visible"),"Centuries view visible")}),test("Today Button: today button not default",function(){var e=$("<input />").appendTo("#qunit-fixture").val("2012-03-05").datepicker({format:"yyyy-mm-dd"}),t=e.data("datepicker"),i=t.picker;e.focus(),ok(i.find(".datepicker-days").is(":visible"),"Days view visible"),ok(i.find(".datepicker-days tfoot .today").is(":not(:visible)"),"Today button not visible")}),test("Today Button: today visibility when enabled",function(){var e=$("<input />").appendTo("#qunit-fixture").val("2012-03-05").datepicker({format:"yyyy-mm-dd",todayBtn:!0}),t=e.data("datepicker"),i=t.picker;e.focus(),ok(i.find(".datepicker-days").is(":visible"),"Days view visible"),ok(i.find(".datepicker-days tfoot .today").is(":visible"),"Today button visible"),i.find(".datepicker-days thead th.datepicker-switch").click(),ok(i.find(".datepicker-months").is(":visible"),"Months view visible"),ok(i.find(".datepicker-months tfoot .today").is(":visible"),"Today button visible"),i.find(".datepicker-months thead th.datepicker-switch").click(),ok(i.find(".datepicker-years").is(":visible"),"Years view visible"),ok(i.find(".datepicker-years tfoot .today").is(":visible"),"Today button visible")}),test("Today Button: data-api",function(){var e=$('<input data-date-today-btn="true" />').appendTo("#qunit-fixture").val("2012-03-05").datepicker({format:"yyyy-mm-dd"}),t=e.data("datepicker"),i=t.picker;e.focus(),ok(i.find(".datepicker-days").is(":visible"),"Days view visible"),ok(i.find(".datepicker-days tfoot .today").is(":visible"),"Today button visible")}),test("Today Button: moves to today's date",function(){var e,t=$("<input />").appendTo("#qunit-fixture").val("2012-03-05").datepicker({format:"yyyy-mm-dd",todayBtn:!0}),i=t.data("datepicker"),a=i.picker;t.focus(),ok(a.find(".datepicker-days").is(":visible"),"Days view visible"),ok(a.find(".datepicker-days tfoot .today").is(":visible"),"Today button visible"),e=a.find(".datepicker-days tfoot .today"),e.click();var d=new Date,s=UTCDate(d.getFullYear(),d.getMonth(),d.getDate());datesEqual(i.viewDate,s),datesEqual(i.dates[0],UTCDate(2012,2,5))}),test('Today Button: "linked" selects today\'s date',function(){var e,t=$("<input />").appendTo("#qunit-fixture").val("2012-03-05").datepicker({format:"yyyy-mm-dd",todayBtn:"linked"}),i=t.data("datepicker"),a=i.picker;t.focus(),ok(a.find(".datepicker-days").is(":visible"),"Days view visible"),ok(a.find(".datepicker-days tfoot .today").is(":visible"),"Today button visible"),e=a.find(".datepicker-days tfoot .today"),e.click();var d=new Date,s=UTCDate(d.getFullYear(),d.getMonth(),d.getDate());datesEqual(i.viewDate,s),datesEqual(i.dates[0],s)}),test("Today Highlight: today's date is not highlighted by default",patch_date(function(e){e.now=UTCDate(2012,2,15);var t,i=$("<input />").appendTo("#qunit-fixture").val("2012-03-05").datepicker({format:"yyyy-mm-dd"}),a=i.data("datepicker"),d=a.picker;i.focus(),ok(d.find(".datepicker-days").is(":visible"),"Days view visible"),equal(d.find(".datepicker-days thead .datepicker-switch").text(),"March 2012",'Title is "March 2012"'),t=d.find(".datepicker-days tbody td:contains(15)"),ok(!t.hasClass("today"),'Today is not marked with "today" class'),t=d.find(".datepicker-days tbody td:contains(14)"),ok(!t.hasClass("today"),'Yesterday is not marked with "today" class'),t=d.find(".datepicker-days tbody td:contains(16)"),ok(!t.hasClass("today"),'Tomorrow is not marked with "today" class')})),test("Today Highlight: today's date is highlighted when not active",patch_date(function(e){e.now=new e(2012,2,15);var t,i=$("<input />").appendTo("#qunit-fixture").val("2012-03-05").datepicker({format:"yyyy-mm-dd",todayHighlight:!0}),a=i.data("datepicker"),d=a.picker;i.focus(),ok(d.find(".datepicker-days").is(":visible"),"Days view visible"),equal(d.find(".datepicker-days thead .datepicker-switch").text(),"March 2012",'Title is "March 2012"'),t=d.find(".datepicker-days tbody td:contains(15)"),ok(t.hasClass("today"),'Today is marked with "today" class'),t=d.find(".datepicker-days tbody td:contains(14)"),ok(!t.hasClass("today"),'Yesterday is not marked with "today" class'),t=d.find(".datepicker-days tbody td:contains(16)"),ok(!t.hasClass("today"),'Tomorrow is not marked with "today" class')})),test("Clear Button: clear visibility when enabled",function(){var e=$("<input />").appendTo("#qunit-fixture").val("2012-03-05").datepicker({format:"yyyy-mm-dd",clearBtn:!0}),t=e.data("datepicker"),i=t.picker;e.focus(),ok(i.find(".datepicker-days").is(":visible"),"Days view visible"),ok(i.find(".datepicker-days tfoot .clear").is(":visible"),"Clear button visible"),i.find(".datepicker-days thead th.datepicker-switch").click(),ok(i.find(".datepicker-months").is(":visible"),"Months view visible"),ok(i.find(".datepicker-months tfoot .clear").is(":visible"),"Clear button visible"),i.find(".datepicker-months thead th.datepicker-switch").click(),ok(i.find(".datepicker-years").is(":visible"),"Years view visible"),ok(i.find(".datepicker-years tfoot .clear").is(":visible"),"Clear button visible")}),test("Clear Button: clears input value",function(){var e,t=$("<input />").appendTo("#qunit-fixture").val("2012-03-05").datepicker({format:"yyyy-mm-dd",clearBtn:!0}),i=t.data("datepicker"),a=i.picker;t.focus(),ok(a.find(".datepicker-days").is(":visible"),"Days view visible"),ok(a.find(".datepicker-days tfoot .clear").is(":visible"),"Today button visible"),e=a.find(".datepicker-days tfoot .clear"),e.click(),equal(t.val(),"","Input value has been cleared."),ok(a.is(":visible"),"Picker is visible")}),test("Clear Button: hides datepicker if autoclose is on",function(){var e,t=$("<input />").appendTo("#qunit-fixture").val("2012-03-05").datepicker({format:"yyyy-mm-dd",clearBtn:!0,autoclose:!0}),i=t.data("datepicker"),a=i.picker;t.focus(),ok(a.find(".datepicker-days").is(":visible"),"Days view visible"),ok(a.find(".datepicker-days tfoot .clear").is(":visible"),"Today button visible"),e=a.find(".datepicker-days tfoot .clear"),e.click(),equal(t.val(),"","Input value has been cleared."),ok(a.is(":not(:visible)"),"Picker is hidden")}),test("Active Toggle Default: when active date is selected it is not unset",function(){var e,t=$("<input />").appendTo("#qunit-fixture").val("2012-03-05").datepicker({format:"yyyy-mm-dd"}),i=t.data("datepicker"),a=i.picker;t.focus(),ok(-1!==i.dates.contains(UTCDate(2012,2,5)),"2012-03-05 selected"),e=a.find(".datepicker-days .day.active"),e.click(),equal(t.val(),"2012-03-05","Input value has not been cleared.")}),test("Active Toggle Enabled (single date): when active date is selected it is unset",function(){var e,t=$("<input />").appendTo("#qunit-fixture").val("2012-03-05").datepicker({format:"yyyy-mm-dd",toggleActive:!0}),i=t.data("datepicker"),a=i.picker;t.focus(),ok(-1!==i.dates.contains(UTCDate(2012,2,5)),"2012-03-05 selected"),e=a.find(".datepicker-days .day.active"),e.click(),equal(t.val(),"","Input value has been cleared.")}),test("Active Toggle Multidate Default: when one of the active dates is selected it is unset",function(){var e,t=$("<input />").appendTo("#qunit-fixture").val("2012-03-05").datepicker({format:"yyyy-mm-dd",multidate:!0}),i=t.data("datepicker"),a=i.picker;t.focus(),ok(-1!==i.dates.contains(UTCDate(2012,2,5)),"2012-03-05 in dates"),e=a.find(".datepicker-days tbody td:nth(7)"),e.click(),datesEqual(i.dates.get(-1),UTCDate(2012,2,4),"2012-03-04 in dates"),datesEqual(i.viewDate,UTCDate(2012,2,4)),equal(t.val(),"2012-03-05,2012-03-04"),e=a.find(".datepicker-days tbody td:nth(7)"),e.click(),ok(-1===i.dates.contains(UTCDate(2012,2,4)),"2012-03-04 no longer in dates"),datesEqual(i.viewDate,UTCDate(2012,2,4)),equal(t.val(),"2012-03-05")}),test("Active Toggle Disabled: when active date is selected it remains",function(){var e,t=$("<input />").appendTo("#qunit-fixture").val("2012-03-05").datepicker({format:"yyyy-mm-dd",toggleActive:!1}),i=t.data("datepicker"),a=i.picker;t.focus(),ok(-1!==i.dates.contains(UTCDate(2012,2,5)),"2012-03-05 selected"),e=a.find(".datepicker-days .day.active"),e.click(),ok(-1!==i.dates.contains(UTCDate(2012,2,5)),"2012-03-05 still selected"),datesEqual(i.viewDate,UTCDate(2012,2,5)),equal(t.val(),"2012-03-05")}),test("Active Toggle Multidate Disabled: when activeToggle is set to false, but multidate is set, the option is ignored and selecting an active date it is unset",function(){var e,t=$("<input />").appendTo("#qunit-fixture").val("2012-03-05").datepicker({format:"yyyy-mm-dd",multidate:!0,toggleActive:!1}),i=t.data("datepicker"),a=i.picker;t.focus(),ok(-1!==i.dates.contains(UTCDate(2012,2,5)),"2012-03-05 in dates"),e=a.find(".datepicker-days tbody td:nth(7)"),e.click(),datesEqual(i.dates.get(-1),UTCDate(2012,2,4),"2012-03-04 in dates"),datesEqual(i.viewDate,UTCDate(2012,2,4)),equal(t.val(),"2012-03-05,2012-03-04"),e=a.find(".datepicker-days tbody td:nth(7)"),e.click(),ok(-1===i.dates.contains(UTCDate(2012,2,4)),"2012-03-04 no longer in dates"),datesEqual(i.viewDate,UTCDate(2012,2,4)),equal(t.val(),"2012-03-05")}),test("DaysOfWeekDisabled",function(){var e,t=$("<input />").appendTo("#qunit-fixture").val("2012-10-26").datepicker({format:"yyyy-mm-dd",daysOfWeekDisabled:"1,5"}),i=t.data("datepicker"),a=i.picker;t.focus(),e=a.find(".datepicker-days tbody td:nth(22)"),ok(e.hasClass("disabled"),"Day of week is disabled"),e=a.find(".datepicker-days tbody td:nth(24)"),ok(!e.hasClass("disabled"),"Day of week is enabled"),e=a.find(".datepicker-days tbody td:nth(26)"),ok(e.hasClass("disabled"),"Day of week is disabled")}),test("DaysOfWeekHighlighted",function(){var e,t=$("<input />").appendTo("#qunit-fixture").val("2012-10-26").datepicker({format:"yyyy-mm-dd",startDate:"2012-10-02",daysOfWeekHighlighted:"1,5"}),i=t.data("datepicker"),a=i.picker;t.focus(),e=a.find(".datepicker-days tbody td:nth(0)"),ok(!e.hasClass("highlighted"),"Day of week is not highlighted"),e=a.find(".datepicker-days tbody td:nth(22)"),ok(e.hasClass("highlighted"),"Day of week is highlighted"),e=a.find(".datepicker-days tbody td:nth(24)"),ok(!e.hasClass("highlighted"),"Day of week is not highlighted"),e=a.find(".datepicker-days tbody td:nth(26)"),ok(e.hasClass("highlighted"),"Day of week is highlighted")}),test("DatesDisabled",function(){var e,t=$("<input />").appendTo("#qunit-fixture").val("2012-10-26").datepicker({format:"yyyy-mm-dd",datesDisabled:["2012-10-1","2012-10-10","2012-10-20"]}),i=t.data("datepicker"),a=i.picker;t.focus(),e=a.find(".datepicker-days tbody td:nth(1)"),ok(e.hasClass("disabled"),"Day of week is disabled"),e=a.find(".datepicker-days tbody td:nth(2)"),ok(!e.hasClass("disabled"),"Day of week is enabled"),e=a.find(".datepicker-days tbody td:nth(10)"),ok(e.hasClass("disabled"),"Day of week is disabled"),e=a.find(".datepicker-days tbody td:nth(11)"),ok(!e.hasClass("disabled"),"Day of week is enabled"),e=a.find(".datepicker-days tbody td:nth(20)"),ok(e.hasClass("disabled"),"Day of week is disabled"),e=a.find(".datepicker-days tbody td:nth(21)"),ok(!e.hasClass("disabled"),"Day of week is enabled")}),test("BeforeShowDay",function(){var e,t=function(e){switch(e.getDate()){case 25:return{tooltip:"Example tooltip",classes:"active"};case 26:return"test26";case 27:return{enabled:!1,classes:"test27"};case 28:return!1}},i=$("<input />").appendTo("#qunit-fixture").val("2012-10-26").datepicker({format:"yyyy-mm-dd",beforeShowDay:t}),a=i.data("datepicker"),d=a.picker;i.focus(),e=d.find(".datepicker-days tbody td:nth(25)"),equal(e.attr("title"),"Example tooltip","25th has tooltip"),ok(!e.hasClass("disabled"),"25th is enabled"),e=d.find(".datepicker-days tbody td:nth(26)"),ok(e.hasClass("test26"),"26th has test26 class"),ok(!e.hasClass("disabled"),"26th is enabled"),e=d.find(".datepicker-days tbody td:nth(27)"),ok(e.hasClass("test27"),"27th has test27 class"),ok(e.hasClass("disabled"),"27th is disabled"),e=d.find(".datepicker-days tbody td:nth(28)"),ok(e.hasClass("disabled"),"28th is disabled"),e=d.find(".datepicker-days tbody td:nth(29)"),ok(!e.hasClass("disabled"),"29th is enabled")}),test("BeforeShowMonth",function(){var e,t=function(e){switch(e.getMonth()){case 0:return{tooltip:"Example tooltip",classes:"active"};case 2:return"testMarch";case 4:return{enabled:!1,classes:"testMay"};case 5:return!1}},i=$("<input />").appendTo("#qunit-fixture").val("2012-10-26").datepicker({format:"yyyy-mm-dd",beforeShowMonth:t}),a=i.data("datepicker"),d=a.picker;i.focus(),e=d.find(".datepicker-months tbody span:nth(0)"),equal(e.attr("title"),"Example tooltip","1st has tooltip"),ok(!e.hasClass("disabled"),"January is enabled"),e=d.find(".datepicker-months tbody span:nth(2)"),ok(e.hasClass("testMarch"),"March has testMarch class"),ok(!e.hasClass("disabled"),"March enabled"),e=d.find(".datepicker-months tbody span:nth(4)"),ok(e.hasClass("testMay"),"May has testMay class"),ok(e.hasClass("disabled"),"May is disabled"),e=d.find(".datepicker-months tbody span:nth(5)"),ok(e.hasClass("disabled"),"June is disabled"),e=d.find(".datepicker-months tbody span:nth(6)"),ok(!e.hasClass("disabled"),"July is enabled")}),test("BeforeShowYear",function(){var e,t=function(e){switch(e.getFullYear()){case 2013:return{tooltip:"Example tooltip",classes:"active"};case 2014:return"test2014";case 2015:return{enabled:!1,classes:"test2015"};case 2016:return!1}},i=$("<input />").appendTo("#qunit-fixture").val("2012-10-26").datepicker({format:"yyyy-mm-dd",beforeShowYear:t}),a=i.data("datepicker"),d=a.picker;i.focus(),e=d.find(".datepicker-years tbody span:nth(4)"),equal(e.attr("title"),"Example tooltip","5th has tooltip"),ok(!e.hasClass("disabled"),"2013, 5th is enabled"),e=d.find(".datepicker-years tbody span:nth(5)"),ok(e.hasClass("test2014"),"6th has test2014 class"),ok(!e.hasClass("disabled"),"2014, 6th is enabled"),e=d.find(".datepicker-years tbody span:nth(6)"),ok(e.hasClass("test2015"),"2015, 7th has test2015 class"),ok(e.hasClass("disabled"),"2015, 7th is disabled"),e=d.find(".datepicker-years tbody span:nth(7)"),ok(e.hasClass("disabled"),"2016, 8th is disabled"),e=d.find(".datepicker-years tbody span:nth(8)"),ok(!e.hasClass("disabled"),"2017, 9th is enabled")}),test("beforeShowDecade",function(){var e,t=function(e){switch(e.getFullYear()){case 2030:return{tooltip:"Example tooltip",classes:"active"};case 2040:return"test2040";case 2050:return{enabled:!1,classes:"test2050"};case 2060:return!1}},i=$("<input />").appendTo("#qunit-fixture").val("03/05/2012").datepicker({beforeShowDecade:t}),a=i.data("datepicker"),d=a.picker;i.focus(),e=d.find(".datepicker-decades tbody span:nth(4)"),equal(e.attr("title"),"Example tooltip","5th has tooltip"),ok(!e.hasClass("disabled"),"2030, 5th is enabled"),e=d.find(".datepicker-decades tbody span:nth(5)"),ok(e.hasClass("test2040"),"6th has test2040 class"),ok(!e.hasClass("disabled"),"2040, 6th is enabled"),e=d.find(".datepicker-decades tbody span:nth(6)"),ok(e.hasClass("test2050"),"2050, 7th has test2050 class"),ok(e.hasClass("disabled"),"2050, 7th is disabled"),e=d.find(".datepicker-decades tbody span:nth(7)"),ok(e.hasClass("disabled"),"2060, 8th is disabled"),e=d.find(".datepicker-decades tbody span:nth(8)"),ok(!e.hasClass("disabled"),"2070, 9th is enabled")}),test("beforeShowCentury",function(){var e,t=function(e){switch(e.getFullYear()){case 2300:return{tooltip:"Example tooltip",classes:"active"};case 2400:return"test2400";case 2500:return{enabled:!1,classes:"test2500"};case 2600:return!1}},i=$("<input />").appendTo("#qunit-fixture").val("03/05/2012").datepicker({beforeShowCentury:t}),a=i.data("datepicker"),d=a.picker;i.focus(),e=d.find(".datepicker-centuries tbody span:nth(4)"),equal(e.attr("title"),"Example tooltip","5th has tooltip"),ok(!e.hasClass("disabled"),"2300, 5th is enabled"),e=d.find(".datepicker-centuries tbody span:nth(5)"),ok(e.hasClass("test2400"),"6th has test2400 class"),ok(!e.hasClass("disabled"),"2400, 6th is enabled"),e=d.find(".datepicker-centuries tbody span:nth(6)"),ok(e.hasClass("test2500"),"2500, 7th has test2500 class"),ok(e.hasClass("disabled"),"2500, 7th is disabled"),e=d.find(".datepicker-centuries tbody span:nth(7)"),ok(e.hasClass("disabled"),"2600, 8th is disabled"),e=d.find(".datepicker-centuries tbody span:nth(8)"),ok(!e.hasClass("disabled"),"2700, 9th is enabled")}),test("Orientation: values are parsed correctly",function(){var e=$("<input />").appendTo("#qunit-fixture").val("2012-10-26").datepicker({format:"yyyy-mm-dd"}),t=e.data("datepicker");equal(t.o.orientation.x,"auto"),equal(t.o.orientation.y,"auto"),t._process_options({orientation:""}),equal(t.o.orientation.x,"auto","Empty value"),equal(t.o.orientation.y,"auto","Empty value"),t._process_options({orientation:"left"}),equal(t.o.orientation.x,"left",'"left"'),equal(t.o.orientation.y,"auto",'"left"'),t._process_options({orientation:"right"}),equal(t.o.orientation.x,"right",'"right"'),equal(t.o.orientation.y,"auto",'"right"'),t._process_options({orientation:"top"}),equal(t.o.orientation.x,"auto",'"top"'),equal(t.o.orientation.y,"top",'"top"'),t._process_options({orientation:"bottom"}),equal(t.o.orientation.x,"auto",'"bottom"'),equal(t.o.orientation.y,"bottom",'"bottom"'),t._process_options({orientation:"left top"}),equal(t.o.orientation.x,"left",'"left top"'),equal(t.o.orientation.y,"top",'"left top"'),t._process_options({orientation:"left bottom"}),equal(t.o.orientation.x,"left",'"left bottom"'),equal(t.o.orientation.y,"bottom",'"left bottom"'),t._process_options({orientation:"right top"}),equal(t.o.orientation.x,"right",'"right top"'),equal(t.o.orientation.y,"top",'"right top"'),t._process_options({orientation:"right bottom"}),equal(t.o.orientation.x,"right",'"right bottom"'),equal(t.o.orientation.y,"bottom",'"right bottom"'),t._process_options({orientation:"left right"}),equal(t.o.orientation.x,"left",'"left right"'),equal(t.o.orientation.y,"auto",'"left right"'),t._process_options({orientation:"right left"}),equal(t.o.orientation.x,"right",'"right left"'),equal(t.o.orientation.y,"auto",'"right left"'),t._process_options({orientation:"top bottom"}),equal(t.o.orientation.x,"auto",'"top bottom"'),equal(t.o.orientation.y,"top",'"top bottom"'),t._process_options({orientation:"bottom top"}),equal(t.o.orientation.x,"auto",'"bottom top"'),equal(t.o.orientation.y,"bottom",'"bottom top"'),t._process_options({orientation:"foo bar"}),equal(t.o.orientation.x,"auto",'"foo bar"'),equal(t.o.orientation.y,"auto",'"foo bar"'),t._process_options({orientation:"foo left"}),equal(t.o.orientation.x,"left",'"foo left"'),equal(t.o.orientation.y,"auto",'"foo left"'),t._process_options({orientation:"top bar"}),equal(t.o.orientation.x,"auto",'"top bar"'),equal(t.o.orientation.y,"top",'"top bar"')}),test("startDate",function(){var e,t=$("<input />").appendTo("#qunit-fixture").val("2012-10-26").datepicker({format:"yyyy-mm-dd",startDate:new Date(2012,9,26)}),i=t.data("datepicker"),a=i.picker;t.focus(),e=a.find(".datepicker-days tbody td:nth(25)"),ok(e.hasClass("disabled"),"Previous day is disabled"),e=a.find(".datepicker-days tbody td:nth(26)"),ok(!e.hasClass("disabled"),"Specified date is enabled"),e=a.find(".datepicker-days tbody td:nth(27)"),ok(!e.hasClass("disabled"),"Next day is enabled")}),test("endDate",function(){var e,t=$("<input />").appendTo("#qunit-fixture").val("2012-10-26").datepicker({format:"yyyy-mm-dd",endDate:new Date(2012,9,26)}),i=t.data("datepicker"),a=i.picker;t.focus(),e=a.find(".datepicker-days tbody td:nth(25)"),ok(!e.hasClass("disabled"),"Previous day is enabled"),e=a.find(".datepicker-days tbody td:nth(26)"),ok(!e.hasClass("disabled"),"Specified date is enabled"),e=a.find(".datepicker-days tbody td:nth(27)"),ok(e.hasClass("disabled"),"Next day is disabled")}),test("Multidate",function(){var e,t=$("<input />").appendTo("#qunit-fixture").val("2012-03-05").datepicker({format:"yyyy-mm-dd",multidate:!0}),i=t.data("datepicker"),a=i.picker;t.focus(),ok(-1!==i.dates.contains(UTCDate(2012,2,5)),"2012-03-05 (initial date) in dates"),e=a.find(".datepicker-days tbody td:nth(7)"),equal(e.text(),"4"),e.click(),datesEqual(i.dates.get(-1),UTCDate(2012,2,4),"2012-03-04 in dates"),datesEqual(i.viewDate,UTCDate(2012,2,4)),equal(t.val(),"2012-03-05,2012-03-04"),e=a.find(".datepicker-days tbody td:nth(15)"),equal(e.text(),"12"),e.click(),datesEqual(i.dates.get(-1),UTCDate(2012,2,12),"2012-03-12 in dates"),datesEqual(i.viewDate,UTCDate(2012,2,12)),equal(t.val(),"2012-03-05,2012-03-04,2012-03-12"),e=a.find(".datepicker-days tbody td:nth(7)"),equal(e.text(),"4"),e.click(),ok(-1===i.dates.contains(UTCDate(2012,2,4)),"2012-03-04 no longer in dates"),datesEqual(i.viewDate,UTCDate(2012,2,4)),equal(t.val(),"2012-03-05,2012-03-12")}),test("Multidate with limit",function(){var e,t=$("<input />").appendTo("#qunit-fixture").val("2012-03-05").datepicker({format:"yyyy-mm-dd",multidate:2}),i=t.data("datepicker"),a=i.picker;t.focus(),ok(-1!==i.dates.contains(UTCDate(2012,2,5)),"2012-03-05 (initial date) in dates"),e=a.find(".datepicker-days tbody td:nth(7)"),equal(e.text(),"4"),e.click(),datesEqual(i.dates.get(-1),UTCDate(2012,2,4),"2012-03-04 in dates"),datesEqual(i.viewDate,UTCDate(2012,2,4)),equal(t.val(),"2012-03-05,2012-03-04"),e=a.find(".datepicker-days tbody td:nth(15)"),equal(e.text(),"12"),e.click(),datesEqual(i.dates.get(-1),UTCDate(2012,2,12),"2012-03-12 in dates"),datesEqual(i.viewDate,UTCDate(2012,2,12)),equal(t.val(),"2012-03-04,2012-03-12"),e=a.find(".datepicker-days tbody td:nth(20)"),equal(e.text(),"17"),e.click(),datesEqual(i.dates.get(-1),UTCDate(2012,2,17),"2012-03-17 in dates"),ok(-1===i.dates.contains(UTCDate(2012,2,4)),"2012-03-04 no longer in dates"),datesEqual(i.viewDate,UTCDate(2012,2,17)),equal(t.val(),"2012-03-12,2012-03-17")}),test("Multidate Separator",function(){var e,t=$("<input />").appendTo("#qunit-fixture").val("2012-03-05").datepicker({format:"yyyy-mm-dd",multidate:!0,multidateSeparator:" "}),i=t.data("datepicker"),a=i.picker;t.focus(),e=a.find(".datepicker-days tbody td:nth(7)"),equal(e.text(),"4"),e.click(),equal(t.val(),"2012-03-05 2012-03-04"),e=a.find(".datepicker-days tbody td:nth(15)"),equal(e.text(),"12"),e.click(),equal(t.val(),"2012-03-05 2012-03-04 2012-03-12")}),test("Picker is shown on input focus when showOnFocus is not defined",function(){var e=$("<input />").appendTo("#qunit-fixture").val("2014-01-01").datepicker({}),t=e.data("datepicker"),i=t.picker;e.focus(),ok(i.is(":visible"),"Datepicker is visible")}),test("Picker is shown on input focus when showOnFocus is true",function(){var e=$("<input />").appendTo("#qunit-fixture").val("2014-01-01").datepicker({showOnFocus:!0}),t=e.data("datepicker"),i=t.picker;e.focus(),ok(i.is(":visible"),"Datepicker is visible")}),test("Picker is hidden on input focus when showOnFocus is false",function(){var e=$("<input />").appendTo("#qunit-fixture").val("2014-01-01").datepicker({showOnFocus:!1}),t=e.data("datepicker"),i=t.picker;e.focus(),ok(i.is(":hidden"),"Datepicker is hidden")}),test("Container",function(){var e=$('<div class="date-picker-container"/>').appendTo("#qunit-fixture"),t=$("<input />").appendTo("#qunit-fixture").val("2012-10-26").datepicker({format:"yyyy-mm-dd",container:".date-picker-container",startDate:new Date(2012,9,26)}),i=t.data("datepicker"),a=i.picker;t.focus(),equal(a.parent()[0],e[0],"Container is not the testContainer that was specificed")}),test("Default View Date",function(){var e=$("<input />").appendTo("#qunit-fixture").datepicker({format:"yyyy-mm-dd",defaultViewDate:{year:1977,month:4,day:25}}),t=e.data("datepicker"),i=t.picker;e.focus(),equal(i.find(".datepicker-days thead .datepicker-switch").text(),"May 1977")}),test("Immediate Updates",function(){var e=$("<input />").appendTo("#qunit-fixture").val("2014-01-01").datepicker({format:"yyyy-mm-dd",immediateUpdates:!0}),t=e.data("datepicker"),i=t.picker;e.focus(),i.find(".datepicker-days .next").click(),equal(e.val(),"2014-02-01"),i.find(".datepicker-days .datepicker-switch").click(),i.find(".datepicker-months .next").click(),equal(e.val(),"2015-02-01"),i.find(".datepicker-months .datepicker-switch").click(),i.find(".datepicker-years .next").click(),equal(e.val(),"2015-02-01")}),test("forceParse: false on enter on invalid date",function(){var e=$("<input />").appendTo("#qunit-fixture").val("123456789").datepicker({forceParse:!1}).focus();e.trigger({type:"keydown",keyCode:13,shiftKey:!1}),equal(e.val(),"123456789","date not parsed")}),test("forceParse: false on mousedown on invalid date",function(){var e=$("<input />").appendTo("#qunit-fixture").val("123456789").datepicker({forceParse:!1}).focus();$(document).trigger({type:"mousedown"}),equal(e.val(),"123456789","date not parsed")}),test("Enable on readonly options (default)",function(){var e=$('<input readonly="readonly" />').appendTo("#qunit-fixture").datepicker({format:"dd-mm-yyyy"}),t=e.data("datepicker"),i=t.picker;ok(!i.is(":visible")),e.focus(),ok(i.is(":visible"))}),test("Enable on readonly options (false)",function(){var e=$('<input readonly="readonly" />').appendTo("#qunit-fixture").datepicker({format:"dd-mm-yyyy",enableOnReadonly:!1}),t=e.data("datepicker"),i=t.picker;ok(!i.is(":visible")),e.focus(),ok(!i.is(":visible"))}),test("Startview: year view visible after date pick",function(){var e,t=$("<input />").appendTo("#qunit-fixture").datepicker({startView:2,minViewMode:1,autoclose:!0}),i=t.data("datepicker"),a=i.picker;t.focus(),ok(a.find(".datepicker-days").is(":not(:visible)"),"Days view hidden"),ok(a.find(".datepicker-months").is(":not(:visible)"),"Months view hidden"),ok(a.find(".datepicker-years").is(":visible"),"Years view visible"),e=a.find(".datepicker-years tbody td:nth(7)"),e.click(),e=a.find(".datepicker-years tbody td:nth(4)"),e.click(),e=a.find(".datepicker-years tbody td:nth(20)"),e.click(),t.focus(),ok(a.find(".datepicker-days").is(":not(:visible)"),"Days view hidden"),ok(a.find(".datepicker-months").is(":not(:visible)"),"Months view hidden"),ok(a.find(".datepicker-years").is(":visible"),"Years view visible")}),test("Title: none",function(){var e,t=$("<input />").appendTo("#qunit-fixture").datepicker({
format:"yyyy-mm-dd"}),i=t.data("datepicker"),a=i.picker;t.focus(),ok(a.is(":visible"),"Picker is visible"),e=a.find(".datepicker-days thead .datepicker-title"),ok(e.is(":not(:visible)"),"Title is hidden")}),test("Title: with value",function(){var e,t=$("<input />").appendTo("#qunit-fixture").datepicker({format:"yyyy-mm-dd",title:"Some Title"}),i=t.data("datepicker"),a=i.picker;t.focus(),ok(a.is(":visible"),"Picker is visible"),e=a.find(".datepicker-days thead .datepicker-title"),ok(e.is(":visible"),"Title is visible"),equal(e.text(),"Some Title")}),test("i18n: Leverage i18n titleFormat when available.",patch_date(function(e){var t=$("<input />").appendTo("#qunit-fixture").val("2015年04月21日").datepicker({language:"zh-CN"}),i=t.data("datepicker"),a=i.picker;t.focus(),equal(a.find(".datepicker-days thead .datepicker-switch").text(),"2015年04月","Title is in Chinese: 2015年04月")})),test("i18n: Leverage English (default) i18n titleFormat when translation key for specified language is not available.",patch_date(function(e){var t=$("<input />").appendTo("#qunit-fixture").val("04/21/2015").datepicker({language:"aa-BB"}),i=t.data("datepicker"),a=i.picker;t.focus(),equal(a.find(".datepicker-days thead .datepicker-switch").text(),"April 2015","Title is in default format: April 2015")})),test("Z-index Offset: none",function(){var e=$("<input />").appendTo("#qunit-fixture").datepicker(),t=e.data("datepicker"),i=t.picker;e.parent().css("z-index",234),e.focus(),equal(t.o.zIndexOffset,10,"Z-index offset option defaults to 10."),equal(i.css("z-index"),244,"Picker Z-index offset is respected.")}),test("Z-index Offset: with value",function(){var e=$("<input />").appendTo("#qunit-fixture").datepicker({zIndexOffset:1e3}),t=e.data("datepicker"),i=t.picker;e.parent().css("z-index",234),e.focus(),equal(t.o.zIndexOffset,1e3,"Z-index offset option is accepted."),equal(i.css("z-index"),1234,"Picker Z-index offset is respected.")}),test("templates",function(){var e=$("<input />").appendTo("#qunit-fixture").datepicker({templates:{leftArrow:'<span class="glyphicon glyphicon-arrow-left"></span>',rightArrow:"</table>"}}),t=e.data("datepicker"),i=t.picker;e.focus(),equal(i.find(".datepicker-days .prev").prop("innerHTML"),'<span class="glyphicon glyphicon-arrow-left"></span>'),equal(i.find(".datepicker-days .next").prop("innerHTML"),$("<div>").html("&raquo;").text())});