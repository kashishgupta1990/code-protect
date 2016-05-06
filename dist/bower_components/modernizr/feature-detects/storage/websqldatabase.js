/*!
{
  "name": "Web SQL Database",
  "property": "websqldatabase",
  "caniuse": "sql-storage",
  "tags": ["storage"]
}
!*/

define(["Modernizr"],function(e){e.addTest("websqldatabase","openDatabase"in window)});