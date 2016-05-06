/* =========================================================
 * bootstrap-datepicker.js
 * http://www.eyecon.ro/bootstrap-datepicker
 * =========================================================
 * Copyright 2012 Stefan Petre
 * Improvements by Andrew Rowls
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ========================================================= */

!function(t){function e(){return new Date(Date.UTC.apply(Date,arguments))}var a=function(e,a){switch(this.element=t(e),this.language=a.language||this.element.data("date-language")||"en",this.language=this.language in i?this.language:this.language.split("-")[0],this.language=this.language in i?this.language:"en",this.isRTL=i[this.language].rtl||!1,this.format=s.parseFormat(a.format||this.element.data("date-format")||i[this.language].format||"mm/dd/yyyy"),this.isInline=!1,this.isInput=this.element.is("input"),this.component=this.element.is(".date")?this.element.find(".add-on, .btn"):!1,this.hasInput=this.component&&this.element.find("input").length,this.component&&0===this.component.length&&(this.component=!1),this.forceParse=!0,"forceParse"in a?this.forceParse=a.forceParse:"dateForceParse"in this.element.data()&&(this.forceParse=this.element.data("date-force-parse")),this.picker=t(s.template),this._buildEvents(),this._attachEvents(),this.isInline?this.picker.addClass("datepicker-inline").appendTo(this.element):this.picker.addClass("datepicker-dropdown dropdown-menu"),this.isRTL&&(this.picker.addClass("datepicker-rtl"),this.picker.find(".prev i, .next i").toggleClass("icon-arrow-left icon-arrow-right")),this.autoclose=!1,"autoclose"in a?this.autoclose=a.autoclose:"dateAutoclose"in this.element.data()&&(this.autoclose=this.element.data("date-autoclose")),this.keyboardNavigation=!0,"keyboardNavigation"in a?this.keyboardNavigation=a.keyboardNavigation:"dateKeyboardNavigation"in this.element.data()&&(this.keyboardNavigation=this.element.data("date-keyboard-navigation")),this.viewMode=this.startViewMode=0,a.startView||this.element.data("date-start-view")){case 2:case"decade":this.viewMode=this.startViewMode=2;break;case 1:case"year":this.viewMode=this.startViewMode=1}if(this.minViewMode=a.minViewMode||this.element.data("date-min-view-mode")||0,"string"==typeof this.minViewMode)switch(this.minViewMode){case"months":this.minViewMode=1;break;case"years":this.minViewMode=2;break;default:this.minViewMode=0}this.viewMode=this.startViewMode=Math.max(this.startViewMode,this.minViewMode),this.todayBtn=a.todayBtn||this.element.data("date-today-btn")||!1,this.todayHighlight=a.todayHighlight||this.element.data("date-today-highlight")||!1,this.calendarWeeks=!1,"calendarWeeks"in a?this.calendarWeeks=a.calendarWeeks:"dateCalendarWeeks"in this.element.data()&&(this.calendarWeeks=this.element.data("date-calendar-weeks")),this.calendarWeeks&&this.picker.find("tfoot th.today").attr("colspan",function(t,e){return parseInt(e)+1}),this._allow_update=!1,this.weekStart=(a.weekStart||this.element.data("date-weekstart")||i[this.language].weekStart||0)%7,this.weekEnd=(this.weekStart+6)%7,this.startDate=-(1/0),this.endDate=1/0,this.daysOfWeekDisabled=[],this.setStartDate(a.startDate||this.element.data("date-startdate")),this.setEndDate(a.endDate||this.element.data("date-enddate")),this.setDaysOfWeekDisabled(a.daysOfWeekDisabled||this.element.data("date-days-of-week-disabled")),this.fillDow(),this.fillMonths(),this._allow_update=!0,this.update(),this.showMode(),this.isInline&&this.show()};a.prototype={constructor:a,_events:[],_secondaryEvents:[],_applyEvents:function(t){for(var e,a,i=0;i<t.length;i++)e=t[i][0],a=t[i][1],e.on(a)},_unapplyEvents:function(t){for(var e,a,i=0;i<t.length;i++)e=t[i][0],a=t[i][1],e.off(a)},_buildEvents:function(){this.isInput?this._events=[[this.element,{focus:t.proxy(this.show,this),keyup:t.proxy(this.update,this),keydown:t.proxy(this.keydown,this)}]]:this.component&&this.hasInput?this._events=[[this.element.find("input"),{focus:t.proxy(this.show,this),keyup:t.proxy(this.update,this),keydown:t.proxy(this.keydown,this)}],[this.component,{click:t.proxy(this.show,this)}]]:this.element.is("div")?this.isInline=!0:this._events=[[this.element,{click:t.proxy(this.show,this)}]],this._secondaryEvents=[[this.picker,{click:t.proxy(this.click,this)}],[t(window),{resize:t.proxy(this.place,this)}],[t(document),{mousedown:t.proxy(function(e){0===t(e.target).closest(".datepicker.datepicker-inline, .datepicker.datepicker-dropdown").length&&this.hide()},this)}]]},_attachEvents:function(){this._detachEvents(),this._applyEvents(this._events)},_detachEvents:function(){this._unapplyEvents(this._events)},_attachSecondaryEvents:function(){this._detachSecondaryEvents(),this._applyEvents(this._secondaryEvents)},_detachSecondaryEvents:function(){this._unapplyEvents(this._secondaryEvents)},show:function(t){this.isInline||this.picker.appendTo("body"),this.picker.show(),this.height=this.component?this.component.outerHeight():this.element.outerHeight(),this.place(),this._attachSecondaryEvents(),t&&t.preventDefault(),this.element.trigger({type:"show",date:this.date})},hide:function(t){this.isInline||this.picker.is(":visible")&&(this.picker.hide().detach(),this._detachSecondaryEvents(),this.viewMode=this.startViewMode,this.showMode(),this.forceParse&&(this.isInput&&this.element.val()||this.hasInput&&this.element.find("input").val())&&this.setValue(),this.element.trigger({type:"hide",date:this.date}))},remove:function(){this.hide(),this._detachEvents(),this._detachSecondaryEvents(),this.picker.remove(),delete this.element.data().datepicker,this.isInput||delete this.element.data().date},getDate:function(){var t=this.getUTCDate();return new Date(t.getTime()+6e4*t.getTimezoneOffset())},getUTCDate:function(){return this.date},setDate:function(t){this.setUTCDate(new Date(t.getTime()-6e4*t.getTimezoneOffset()))},setUTCDate:function(t){this.date=t,this.setValue()},setValue:function(){var t=this.getFormattedDate();this.isInput?this.element.val(t):(this.component&&this.element.find("input").val(t),this.element.data("date",t))},getFormattedDate:function(t){return void 0===t&&(t=this.format),s.formatDate(this.date,t,this.language)},setStartDate:function(t){this.startDate=t||-(1/0),this.startDate!==-(1/0)&&(this.startDate=s.parseDate(this.startDate,this.format,this.language)),this.update(),this.updateNavArrows()},setEndDate:function(t){this.endDate=t||1/0,this.endDate!==1/0&&(this.endDate=s.parseDate(this.endDate,this.format,this.language)),this.update(),this.updateNavArrows()},setDaysOfWeekDisabled:function(e){this.daysOfWeekDisabled=e||[],t.isArray(this.daysOfWeekDisabled)||(this.daysOfWeekDisabled=this.daysOfWeekDisabled.split(/,\s*/)),this.daysOfWeekDisabled=t.map(this.daysOfWeekDisabled,function(t){return parseInt(t,10)}),this.update(),this.updateNavArrows()},place:function(){if(!this.isInline){var e=parseInt(this.element.parents().filter(function(){return"auto"!=t(this).css("z-index")}).first().css("z-index"))+10,a=this.component?this.component.parent().offset():this.element.offset(),i=this.component?this.component.outerHeight(!0):this.element.outerHeight(!0);this.picker.css({top:a.top+i,left:a.left,zIndex:e})}},_allow_update:!0,update:function(){if(this._allow_update){var t,e=!1;arguments&&arguments.length&&("string"==typeof arguments[0]||arguments[0]instanceof Date)?(t=arguments[0],e=!0):t=this.isInput?this.element.val():this.element.data("date")||this.element.find("input").val(),this.date=s.parseDate(t,this.format,this.language),e&&this.setValue(),this.date<this.startDate?this.viewDate=new Date(this.startDate):this.date>this.endDate?this.viewDate=new Date(this.endDate):this.viewDate=new Date(this.date),this.fill()}},fillDow:function(){var t=this.weekStart,e="<tr>";if(this.calendarWeeks){var a='<th class="cw">&nbsp;</th>';e+=a,this.picker.find(".datepicker-days thead tr:first-child").prepend(a)}for(;t<this.weekStart+7;)e+='<th class="dow">'+i[this.language].daysMin[t++%7]+"</th>";e+="</tr>",this.picker.find(".datepicker-days thead").append(e)},fillMonths:function(){for(var t="",e=0;12>e;)t+='<span class="month">'+i[this.language].monthsShort[e++]+"</span>";this.picker.find(".datepicker-months td").html(t)},fill:function(){var a=new Date(this.viewDate),n=a.getUTCFullYear(),h=a.getUTCMonth(),r=this.startDate!==-(1/0)?this.startDate.getUTCFullYear():-(1/0),d=this.startDate!==-(1/0)?this.startDate.getUTCMonth():-(1/0),o=this.endDate!==1/0?this.endDate.getUTCFullYear():1/0,l=this.endDate!==1/0?this.endDate.getUTCMonth():1/0,c=this.date&&this.date.valueOf(),p=new Date;this.picker.find(".datepicker-days thead th.switch").text(i[this.language].months[h]+" "+n),this.picker.find("tfoot th.today").text(i[this.language].today).toggle(this.todayBtn!==!1),this.updateNavArrows(),this.fillMonths();var u=e(n,h-1,28,0,0,0,0),f=s.getDaysInMonth(u.getUTCFullYear(),u.getUTCMonth());u.setUTCDate(f),u.setUTCDate(f-(u.getUTCDay()-this.weekStart+7)%7);var v=new Date(u);v.setUTCDate(v.getUTCDate()+42),v=v.valueOf();for(var g,m=[];u.valueOf()<v;){if(u.getUTCDay()==this.weekStart&&(m.push("<tr>"),this.calendarWeeks)){var y=new Date(+u+(this.weekStart-u.getUTCDay()-7)%7*864e5),D=new Date(+y+(11-y.getUTCDay())%7*864e5),w=new Date(+(w=e(D.getUTCFullYear(),0,1))+(11-w.getUTCDay())%7*864e5),k=(D-w)/864e5/7+1;m.push('<td class="cw">'+k+"</td>")}g="",u.getUTCFullYear()<n||u.getUTCFullYear()==n&&u.getUTCMonth()<h?g+=" old":(u.getUTCFullYear()>n||u.getUTCFullYear()==n&&u.getUTCMonth()>h)&&(g+=" new"),this.todayHighlight&&u.getUTCFullYear()==p.getFullYear()&&u.getUTCMonth()==p.getMonth()&&u.getUTCDate()==p.getDate()&&(g+=" today"),c&&u.valueOf()==c&&(g+=" active"),(u.valueOf()<this.startDate||u.valueOf()>this.endDate||-1!==t.inArray(u.getUTCDay(),this.daysOfWeekDisabled))&&(g+=" disabled"),m.push('<td class="day'+g+'">'+u.getUTCDate()+"</td>"),u.getUTCDay()==this.weekEnd&&m.push("</tr>"),u.setUTCDate(u.getUTCDate()+1)}this.picker.find(".datepicker-days tbody").empty().append(m.join(""));var T=this.date&&this.date.getUTCFullYear(),C=this.picker.find(".datepicker-months").find("th:eq(1)").text(n).end().find("span").removeClass("active");T&&T==n&&C.eq(this.date.getUTCMonth()).addClass("active"),(r>n||n>o)&&C.addClass("disabled"),n==r&&C.slice(0,d).addClass("disabled"),n==o&&C.slice(l+1).addClass("disabled"),m="",n=10*parseInt(n/10,10);var M=this.picker.find(".datepicker-years").find("th:eq(1)").text(n+"-"+(n+9)).end().find("td");n-=1;for(var U=-1;11>U;U++)m+='<span class="year'+(-1==U||10==U?" old":"")+(T==n?" active":"")+(r>n||n>o?" disabled":"")+'">'+n+"</span>",n+=1;M.html(m)},updateNavArrows:function(){if(this._allow_update){var t=new Date(this.viewDate),e=t.getUTCFullYear(),a=t.getUTCMonth();switch(this.viewMode){case 0:this.startDate!==-(1/0)&&e<=this.startDate.getUTCFullYear()&&a<=this.startDate.getUTCMonth()?this.picker.find(".prev").css({visibility:"hidden"}):this.picker.find(".prev").css({visibility:"visible"}),this.endDate!==1/0&&e>=this.endDate.getUTCFullYear()&&a>=this.endDate.getUTCMonth()?this.picker.find(".next").css({visibility:"hidden"}):this.picker.find(".next").css({visibility:"visible"});break;case 1:case 2:this.startDate!==-(1/0)&&e<=this.startDate.getUTCFullYear()?this.picker.find(".prev").css({visibility:"hidden"}):this.picker.find(".prev").css({visibility:"visible"}),this.endDate!==1/0&&e>=this.endDate.getUTCFullYear()?this.picker.find(".next").css({visibility:"hidden"}):this.picker.find(".next").css({visibility:"visible"})}}},click:function(a){a.preventDefault();var i=t(a.target).closest("span, td, th");if(1==i.length)switch(i[0].nodeName.toLowerCase()){case"th":switch(i[0].className){case"switch":this.showMode(1);break;case"prev":case"next":var n=s.modes[this.viewMode].navStep*("prev"==i[0].className?-1:1);switch(this.viewMode){case 0:this.viewDate=this.moveMonth(this.viewDate,n);break;case 1:case 2:this.viewDate=this.moveYear(this.viewDate,n)}this.fill();break;case"today":var h=new Date;h=e(h.getFullYear(),h.getMonth(),h.getDate(),0,0,0),this.showMode(-2);var r="linked"==this.todayBtn?null:"view";this._setDate(h,r)}break;case"span":if(!i.is(".disabled")){if(this.viewDate.setUTCDate(1),i.is(".month")){var d=1,o=i.parent().find("span").index(i),l=this.viewDate.getUTCFullYear();this.viewDate.setUTCMonth(o),this.element.trigger({type:"changeMonth",date:this.viewDate}),1==this.minViewMode&&this._setDate(e(l,o,d,0,0,0,0))}else{var l=parseInt(i.text(),10)||0,d=1,o=0;this.viewDate.setUTCFullYear(l),this.element.trigger({type:"changeYear",date:this.viewDate}),2==this.minViewMode&&this._setDate(e(l,o,d,0,0,0,0))}this.showMode(-1),this.fill()}break;case"td":if(i.is(".day")&&!i.is(".disabled")){var d=parseInt(i.text(),10)||1,l=this.viewDate.getUTCFullYear(),o=this.viewDate.getUTCMonth();i.is(".old")?0===o?(o=11,l-=1):o-=1:i.is(".new")&&(11==o?(o=0,l+=1):o+=1),this._setDate(e(l,o,d,0,0,0,0))}}},_setDate:function(t,e){e&&"date"!=e||(this.date=t),e&&"view"!=e||(this.viewDate=t),this.fill(),this.setValue(),this.element.trigger({type:"changeDate",date:this.date});var a;this.isInput?a=this.element:this.component&&(a=this.element.find("input")),a&&(a.change(),!this.autoclose||e&&"date"!=e||this.hide())},moveMonth:function(t,e){if(!e)return t;var a,i,s=new Date(t.valueOf()),n=s.getUTCDate(),h=s.getUTCMonth(),r=Math.abs(e);if(e=e>0?1:-1,1==r)i=-1==e?function(){return s.getUTCMonth()==h}:function(){return s.getUTCMonth()!=a},a=h+e,s.setUTCMonth(a),(0>a||a>11)&&(a=(a+12)%12);else{for(var d=0;r>d;d++)s=this.moveMonth(s,e);a=s.getUTCMonth(),s.setUTCDate(n),i=function(){return a!=s.getUTCMonth()}}for(;i();)s.setUTCDate(--n),s.setUTCMonth(a);return s},moveYear:function(t,e){return this.moveMonth(t,12*e)},dateWithinRange:function(t){return t>=this.startDate&&t<=this.endDate},keydown:function(t){if(this.picker.is(":not(:visible)"))return void(27==t.keyCode&&this.show());var e,a,i,s=!1;switch(t.keyCode){case 27:this.hide(),t.preventDefault();break;case 37:case 39:if(!this.keyboardNavigation)break;e=37==t.keyCode?-1:1,t.ctrlKey?(a=this.moveYear(this.date,e),i=this.moveYear(this.viewDate,e)):t.shiftKey?(a=this.moveMonth(this.date,e),i=this.moveMonth(this.viewDate,e)):(a=new Date(this.date),a.setUTCDate(this.date.getUTCDate()+e),i=new Date(this.viewDate),i.setUTCDate(this.viewDate.getUTCDate()+e)),this.dateWithinRange(a)&&(this.date=a,this.viewDate=i,this.setValue(),this.update(),t.preventDefault(),s=!0);break;case 38:case 40:if(!this.keyboardNavigation)break;e=38==t.keyCode?-1:1,t.ctrlKey?(a=this.moveYear(this.date,e),i=this.moveYear(this.viewDate,e)):t.shiftKey?(a=this.moveMonth(this.date,e),i=this.moveMonth(this.viewDate,e)):(a=new Date(this.date),a.setUTCDate(this.date.getUTCDate()+7*e),i=new Date(this.viewDate),i.setUTCDate(this.viewDate.getUTCDate()+7*e)),this.dateWithinRange(a)&&(this.date=a,this.viewDate=i,this.setValue(),this.update(),t.preventDefault(),s=!0);break;case 13:this.hide(),t.preventDefault();break;case 9:this.hide()}if(s){this.element.trigger({type:"changeDate",date:this.date});var n;this.isInput?n=this.element:this.component&&(n=this.element.find("input")),n&&n.change()}},showMode:function(t){t&&(this.viewMode=Math.max(this.minViewMode,Math.min(2,this.viewMode+t))),this.picker.find(">div").hide().filter(".datepicker-"+s.modes[this.viewMode].clsName).css("display","block"),this.updateNavArrows()}},t.fn.datepicker=function(e){var i=Array.apply(null,arguments);return i.shift(),this.each(function(){var s=t(this),n=s.data("datepicker"),h="object"==typeof e&&e;n||s.data("datepicker",n=new a(this,t.extend({},t.fn.datepicker.defaults,h))),"string"==typeof e&&"function"==typeof n[e]&&n[e].apply(n,i)})},t.fn.datepicker.defaults={},t.fn.datepicker.Constructor=a;var i=t.fn.datepicker.dates={en:{days:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],daysShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat","Sun"],daysMin:["Su","Mo","Tu","We","Th","Fr","Sa","Su"],months:["January","February","March","April","May","June","July","August","September","October","November","December"],monthsShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],today:"Today"}},s={modes:[{clsName:"days",navFnc:"Month",navStep:1},{clsName:"months",navFnc:"FullYear",navStep:1},{clsName:"years",navFnc:"FullYear",navStep:10}],isLeapYear:function(t){return t%4===0&&t%100!==0||t%400===0},getDaysInMonth:function(t,e){return[31,s.isLeapYear(t)?29:28,31,30,31,30,31,31,30,31,30,31][e]},validParts:/dd?|DD?|mm?|MM?|yy(?:yy)?/g,nonpunctuation:/[^ -\/:-@\[\u3400-\u9fff-`{-~\t\n\r]+/g,parseFormat:function(t){var e=t.replace(this.validParts,"\x00").split("\x00"),a=t.match(this.validParts);if(!e||!e.length||!a||0===a.length)throw new Error("Invalid date format.");return{separators:e,parts:a}},parseDate:function(s,n,h){if(s instanceof Date)return s;if(/^[\-+]\d+[dmwy]([\s,]+[\-+]\d+[dmwy])*$/.test(s)){var r,d,o=/([\-+]\d+)([dmwy])/,l=s.match(/([\-+]\d+)([dmwy])/g);s=new Date;for(var c=0;c<l.length;c++)switch(r=o.exec(l[c]),d=parseInt(r[1]),r[2]){case"d":s.setUTCDate(s.getUTCDate()+d);break;case"m":s=a.prototype.moveMonth.call(a.prototype,s,d);break;case"w":s.setUTCDate(s.getUTCDate()+7*d);break;case"y":s=a.prototype.moveYear.call(a.prototype,s,d)}return e(s.getUTCFullYear(),s.getUTCMonth(),s.getUTCDate(),0,0,0)}var p,u,r,l=s&&s.match(this.nonpunctuation)||[],s=new Date,f={},v=["yyyy","yy","M","MM","m","mm","d","dd"],g={yyyy:function(t,e){return t.setUTCFullYear(e)},yy:function(t,e){return t.setUTCFullYear(2e3+e)},m:function(t,e){for(e-=1;0>e;)e+=12;for(e%=12,t.setUTCMonth(e);t.getUTCMonth()!=e;)t.setUTCDate(t.getUTCDate()-1);return t},d:function(t,e){return t.setUTCDate(e)}};g.M=g.MM=g.mm=g.m,g.dd=g.d,s=e(s.getFullYear(),s.getMonth(),s.getDate(),0,0,0);var m=n.parts.slice();if(l.length!=m.length&&(m=t(m).filter(function(e,a){return-1!==t.inArray(a,v)}).toArray()),l.length==m.length){for(var c=0,y=m.length;y>c;c++){if(p=parseInt(l[c],10),r=m[c],isNaN(p))switch(r){case"MM":u=t(i[h].months).filter(function(){var t=this.slice(0,l[c].length),e=l[c].slice(0,t.length);return t==e}),p=t.inArray(u[0],i[h].months)+1;break;case"M":u=t(i[h].monthsShort).filter(function(){var t=this.slice(0,l[c].length),e=l[c].slice(0,t.length);return t==e}),p=t.inArray(u[0],i[h].monthsShort)+1}f[r]=p}for(var D,c=0;c<v.length;c++)D=v[c],D in f&&!isNaN(f[D])&&g[D](s,f[D])}return s},formatDate:function(e,a,s){var n={d:e.getUTCDate(),D:i[s].daysShort[e.getUTCDay()],DD:i[s].days[e.getUTCDay()],m:e.getUTCMonth()+1,M:i[s].monthsShort[e.getUTCMonth()],MM:i[s].months[e.getUTCMonth()],yy:e.getUTCFullYear().toString().substring(2),yyyy:e.getUTCFullYear()};n.dd=(n.d<10?"0":"")+n.d,n.mm=(n.m<10?"0":"")+n.m;for(var e=[],h=t.extend([],a.separators),r=0,d=a.parts.length;d>r;r++)h.length&&e.push(h.shift()),e.push(n[a.parts[r]]);return e.join("")},headTemplate:'<thead><tr><th class="prev"><i class="icon-arrow-left"/></th><th colspan="5" class="switch"></th><th class="next"><i class="icon-arrow-right"/></th></tr></thead>',contTemplate:'<tbody><tr><td colspan="7"></td></tr></tbody>',footTemplate:'<tfoot><tr><th colspan="7" class="today"></th></tr></tfoot>'};s.template='<div class="datepicker"><div class="datepicker-days"><table class=" table-condensed">'+s.headTemplate+"<tbody></tbody>"+s.footTemplate+'</table></div><div class="datepicker-months"><table class="table-condensed">'+s.headTemplate+s.contTemplate+s.footTemplate+'</table></div><div class="datepicker-years"><table class="table-condensed">'+s.headTemplate+s.contTemplate+s.footTemplate+"</table></div></div>",t.fn.datepicker.DPGlobal=s}(window.jQuery);