/*!
{
  "name": "Unicode Range",
  "property": "unicoderange",
  "notes": [{
    "name" : "W3C reference",
    "href": "https://www.w3.org/TR/2013/CR-css-fonts-3-20131003/#descdef-unicode-range"
  }, {
    "name" : "24 Way article",
    "href": "https://24ways.org/2011/creating-custom-font-stacks-with-unicode-range"
  }]
}
!*/

define(["Modernizr","testStyles","createElement"],function(n,e,o){n.addTest("unicoderange",function(){return n.testStyles('@font-face{font-family:"unicodeRange";src:local("Arial");unicode-range:U+0020,U+002E}#modernizr span{font-size:20px;display:inline-block;font-family:"unicodeRange",monospace}#modernizr .mono{font-family:monospace}',function(n){for(var e=[".",".","m","m"],i=0;i<e.length;i++){var a=o("span");a.innerHTML=e[i],a.className=i%2?"mono":"",n.appendChild(a),e[i]=a.clientWidth}return e[0]!==e[1]&&e[2]===e[3]})})});