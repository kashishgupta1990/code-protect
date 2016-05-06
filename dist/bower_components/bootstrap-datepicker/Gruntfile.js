module.exports=function(s){"use strict";s.util.linefeed="\n",s.initConfig({pkg:s.file.readJSON("package.json"),banner:["/*!"," * Datepicker for Bootstrap v<%= pkg.version %> (<%= pkg.homepage %>)"," *"," * Copyright 2012 Stefan Petre"," * Improvements by Andrew Rowls"," * Licensed under the Apache License v2.0 (http://www.apache.org/licenses/LICENSE-2.0)"," */"].join("\n"),clean:{dist:["dist","*-dist.zip"]},jshint:{options:{jshintrc:"js/.jshintrc"},main:{src:"js/bootstrap-datepicker.js"},locales:{src:"js/locales/*.js"},gruntfile:{options:{jshintrc:"grunt/.jshintrc"},src:"Gruntfile.js"}},jscs:{options:{config:"js/.jscsrc"},main:{src:"js/bootstrap-datepicker.js"},locales:{src:"js/locales/*.js"},gruntfile:{src:"Gruntfile.js"}},qunit:{main:"tests/tests.html",timezone:"tests/timezone.html"},concat:{options:{banner:"<%= banner %>",stripBanners:!0},main:{src:"js/bootstrap-datepicker.js",dest:"dist/js/<%= pkg.name %>.js"}},uglify:{options:{preserveComments:"some"},main:{src:"<%= concat.main.dest %>",dest:"dist/js/<%= pkg.name %>.min.js"},locales:{files:[{expand:!0,cwd:"js/locales/",src:"*.js",dest:"dist/locales/",rename:function(s,e){return s+e.replace(/\.js$/,".min.js")}}]}},less:{options:{sourceMap:!0,outputSourceFiles:!0},standalone_bs2:{options:{sourceMapURL:"<%= pkg.name %>.standalone.css.map"},src:"build/build_standalone.less",dest:"dist/css/<%= pkg.name %>.standalone.css"},standalone_bs3:{options:{sourceMapURL:"<%= pkg.name %>3.standalone.css.map"},src:"build/build_standalone3.less",dest:"dist/css/<%= pkg.name %>3.standalone.css"},main_bs2:{options:{sourceMapURL:"<%= pkg.name %>.css.map"},src:"build/build.less",dest:"dist/css/<%= pkg.name %>.css"},main_bs3:{options:{sourceMapURL:"<%= pkg.name %>3.css.map"},src:"build/build3.less",dest:"dist/css/<%= pkg.name %>3.css"}},usebanner:{options:{position:"top",banner:"<%= banner %>"},css:{files:{src:"dist/css/*.css"}}},cssmin:{options:{compatibility:"ie8",keepSpecialComments:"*",sourceMap:!0,advanced:!1},main:{files:{"dist/css/<%= pkg.name %>.min.css":"dist/css/<%= pkg.name %>.css","dist/css/<%= pkg.name %>3.min.css":"dist/css/<%= pkg.name %>3.css"}},standalone:{files:{"dist/css/<%= pkg.name %>.standalone.min.css":"dist/css/<%= pkg.name %>.standalone.css","dist/css/<%= pkg.name %>3.standalone.min.css":"dist/css/<%= pkg.name %>3.standalone.css"}}},csslint:{options:{csslintrc:"less/.csslintrc"},dist:["dist/css/bootstrap-datepicker.css","dist/css/bootstrap-datepicker3.css","dist/css/bootstrap-datepicker.standalone.css","dist/css/bootstrap-datepicker3.standalone.css"]},compress:{main:{options:{archive:"<%= pkg.name %>-<%= pkg.version %>-dist.zip",mode:"zip",level:9,pretty:!0},files:[{expand:!0,cwd:"dist/",src:"**"}]}},"string-replace":{js:{files:[{src:"js/bootstrap-datepicker.js",dest:"js/bootstrap-datepicker.js"}],options:{replacements:[{pattern:/\$(\.fn\.datepicker\.version)\s=\s*("|\')[0-9\.a-z].*("|');/gi,replacement:"$.fn.datepicker.version = '"+s.option("newver")+"';"}]}},npm:{files:[{src:"package.json",dest:"package.json"}],options:{replacements:[{pattern:/\"version\":\s\"[0-9\.a-z].*",/gi,replacement:'"version": "'+s.option("newver")+'",'}]}}}}),require("load-grunt-tasks")(s,{scope:"devDependencies"}),require("time-grunt")(s),s.registerTask("dist-js",["concat","uglify:main","uglify:locales"]),s.registerTask("less-compile","less"),s.registerTask("dist-css",["less-compile","cssmin:main","cssmin:standalone","usebanner"]),s.registerTask("dist",["clean:dist","dist-js","dist-css"]),s.registerTask("lint-js","Lint all js files with jshint and jscs",["jshint","jscs"]),s.registerTask("lint-css","Lint all css files",["dist-css","csslint:dist"]),s.registerTask("qunit-all","Run qunit tests",["qunit:main","qunit-timezone"]),s.registerTask("test","Lint files and run unit tests",["lint-js","qunit-all"]),s.registerTask("bump-version","string-replace"),s.registerTask("screenshots","Rebuilds automated docs screenshots",function(){var e=require("phantomjs").path;s.file.recurse("docs/_static/screenshots/",function(e){s.file["delete"](e)}),s.file.recurse("docs/_screenshots/",function(t,n,i,a){if(/.html$/.test(a)){i=i||"";var c="docs/_static/screenshots/"+i,r=c+a.replace(/.html$/,".png");s.file.exists(c)||s.file.mkdir(c),s.util.spawn({cmd:e,args:["docs/_screenshots/script/screenshot.js",t,r]})}})}),s.registerTask("qunit-timezone","Run timezone tests",function(){process.env.TZ="Europe/Moscow",s.task.run("qunit:timezone")})};