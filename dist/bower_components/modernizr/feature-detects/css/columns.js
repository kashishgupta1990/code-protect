/*!
{
  "name": "CSS Columns",
  "property": "csscolumns",
  "caniuse": "multicolumn",
  "polyfills": ["css3multicolumnjs"],
  "tags": ["css"]
}
!*/

define(["Modernizr","testAllProps"],function(e,r){!function(){e.addTest("csscolumns",function(){var e=!1,n=r("columnCount");try{(e=!!n)&&(e=new Boolean(e))}catch(o){}return e});for(var n,o,t=["Width","Span","Fill","Gap","Rule","RuleColor","RuleStyle","RuleWidth","BreakBefore","BreakAfter","BreakInside"],a=0;a<t.length;a++)n=t[a].toLowerCase(),o=r("column"+t[a]),("breakbefore"===n||"breakafter"===n||"breakinside"==n)&&(o=o||r(t[a])),e.addTest("csscolumns."+n,o)}()});