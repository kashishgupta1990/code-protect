/*!
 * Bootstrap Grunt task for the CommonJS module generation
 * http://getbootstrap.com
 * Copyright 2014-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 */

var fs=require("fs"),path=require("path"),COMMONJS_BANNER="// This file is autogenerated via the `commonjs` Grunt task. You can require() this file in a CommonJS environment.\n";module.exports=function(e,r,a){function i(e){var r=path.relative(n,e).replace(/\\/g,"/");return"require('"+r+"')"}var n=path.dirname(a),t=COMMONJS_BANNER+r.map(i).join("\n");try{fs.writeFileSync(a,t)}catch(o){e.fail.warn(o)}e.log.writeln("File "+a.cyan+" created.")};