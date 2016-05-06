/*!
{
  "name": "Form Validation",
  "property": "formvalidation",
  "tags": ["forms", "validation", "attribute"],
  "builderAliases": ["forms_validation"]
}
!*/

define(["Modernizr","createElement","docElement","testStyles"],function(e,t,n,i){e.addTest("formvalidation",function(){var n=t("form");if(!("checkValidity"in n&&"addEventListener"in n))return!1;if("reportValidity"in n)return!0;var a,o=!1;return e.formvalidationapi=!0,n.addEventListener("submit",function(e){(!window.opera||window.operamini)&&e.preventDefault(),e.stopPropagation()},!1),n.innerHTML='<input name="modTest" required="required" /><button></button>',i("#modernizr form{position:absolute;top:-99999em}",function(t){t.appendChild(n),a=n.getElementsByTagName("input")[0],a.addEventListener("invalid",function(e){o=!0,e.preventDefault(),e.stopPropagation()},!1),e.formvalidationmessage=!!a.validationMessage,n.getElementsByTagName("button")[0].click()}),o})});