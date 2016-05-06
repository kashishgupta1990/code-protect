/*!
{
  "name": "input[form] Attribute",
  "property": "formattribute",
  "tags": ["attribute", "forms", "input"],
  "builderAliases": ["forms_formattribute"]
}
!*/

define(["Modernizr","createElement","docElement"],function(e,t,r){e.addTest("formattribute",function(){var e,n=t("form"),d=t("input"),i=t("div"),o="formtest"+(new Date).getTime(),m=!1;n.id=o;try{d.setAttribute("form",o)}catch(a){document.createAttribute&&(e=document.createAttribute("form"),e.nodeValue=o,d.setAttributeNode(e))}return i.appendChild(n),i.appendChild(d),r.appendChild(i),m=n.elements&&1===n.elements.length&&d.form==n,i.parentNode.removeChild(i),m})});