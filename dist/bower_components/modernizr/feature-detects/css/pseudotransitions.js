/*!
{
  "name": "CSS Generated Content Transitions",
  "property": "csspseudotransitions",
  "tags": ["css"]
}
!*/

define(["Modernizr","testStyles","test/css/transitions"],function(e){e.addTest("csspseudotransitions",function(){var t=!1;if(!e.csstransitions||!window.getComputedStyle)return t;var n='#modernizr:before { content:" "; font-size:5px;'+e._prefixes.join("transition:0s 100s;")+"}#modernizr.trigger:before { font-size:10px; }";return e.testStyles(n,function(e){window.getComputedStyle(e,":before").getPropertyValue("font-size"),e.className+="trigger",t="5px"===window.getComputedStyle(e,":before").getPropertyValue("font-size")}),t})});