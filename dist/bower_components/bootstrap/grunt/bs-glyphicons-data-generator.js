/*!
 * Bootstrap Grunt task for Glyphicons data generation
 * http://getbootstrap.com
 * Copyright 2014-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 */

var fs=require("fs");module.exports=function(e){for(var n=fs.readFileSync("less/glyphicons.less","utf8"),s=n.split("\n"),t=/^\.(glyphicon-[a-zA-Z0-9-]+)/,i="# This file is generated via Grunt task. **Do not edit directly.**\n# See the 'build-glyphicons-data' task in Gruntfile.js.\n\n",a="docs/_data/glyphicons.yml",l=0,c=s.length;c>l;l++){var r=s[l].match(t);null!==r&&(i+="- "+r[1]+"\n")}fs.existsSync("docs/_data")||fs.mkdirSync("docs/_data");try{fs.writeFileSync(a,i)}catch(d){e.fail.warn(d)}e.log.writeln("File "+a.cyan+" created.")};