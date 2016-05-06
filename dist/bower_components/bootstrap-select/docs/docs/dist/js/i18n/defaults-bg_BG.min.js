/*!
 * Bootstrap-select v1.10.0 (http://silviomoreto.github.io/bootstrap-select)
 *
 * Copyright 2013-2016 bootstrap-select
 * Licensed under MIT (https://github.com/silviomoreto/bootstrap-select/blob/master/LICENSE)
 */

!function(e,t){"function"==typeof define&&define.amd?define(["jquery"],function(e){return t(e)}):"object"==typeof exports?module.exports=t(require("jquery")):t(jQuery)}(this,function(e){!function(e){e.fn.selectpicker.defaults={noneSelectedText:"Нищо избрано",noneResultsText:"Няма резултат за {0}",countSelectedText:function(e,t){return 1==e?"{0} избран елемент":"{0} избрани елемента"},maxOptionsText:function(e,t){return[1==e?"Лимита е достигнат ({n} елемент максимум)":"Лимита е достигнат ({n} елемента максимум)",1==t?"Груповия лимит е достигнат ({n} елемент максимум)":"Груповия лимит е достигнат ({n} елемента максимум)"]},selectAllText:"Избери всички",deselectAllText:"Размаркирай всички",multipleSeparator:", "}}(e)});