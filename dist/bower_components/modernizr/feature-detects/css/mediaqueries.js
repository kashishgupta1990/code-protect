/*!
{
  "name": "CSS Media Queries",
  "caniuse": "css-mediaqueries",
  "property": "mediaqueries",
  "tags": ["css"],
  "builderAliases": ["css_mediaqueries"]
}
!*/

define(["Modernizr","mq"],function(e,d){e.addTest("mediaqueries",d("only all"))});