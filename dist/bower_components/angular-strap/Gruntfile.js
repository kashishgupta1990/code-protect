module.exports=function(e){require("matchdep").filterDev("grunt-*").forEach(e.loadNpmTasks);var n=require("grunt-contrib-livereload/lib/utils").livereloadSnippet,t=function(e,n){return e["static"](require("path").resolve(n))},s={src:"src",dist:"dist"};e.initConfig({yeoman:s,pkg:e.file.readJSON("package.json"),meta:{banner:'/**\n * <%= pkg.description %>\n * @version v<%= pkg.version %> - <%= grunt.template.today("yyyy-mm-dd") %>\n * @link <%= pkg.homepage %>\n * @author <%= pkg.author %>\n * @license MIT License, http://www.opensource.org/licenses/MIT\n */\n\n'},watch:{livereload:{files:["{.tmp,<%= yeoman.src %>}/{,*/}*.js"],tasks:["livereload"]}},connect:{options:{port:9e3,hostname:"localhost"},livereload:{options:{middleware:function(e){return[n,t(e,".tmp"),t(e,s.src)]}}},test:{options:{port:9090,middleware:function(e){return[t(e,".tmp"),t(e,"test")]}}}},clean:{dist:{files:[{dot:!0,src:[".tmp","<%= yeoman.dist %>/*","!<%= yeoman.dist %>/.git*"]}]},server:".tmp"},jshint:{options:{jshintrc:".jshintrc"},all:["Gruntfile.js","<%= yeoman.src %>/{,*/}*.js"]},karma:{options:{configFile:"test/karma.conf.js",browsers:["PhantomJS"]},unit:{singleRun:!0},server:{autoWatch:!0}},concat:{options:{banner:"<%= meta.banner %>"},dist:{options:{banner:"(function(window, document, undefined) {\n'use strict';\n",footer:"\n})(window, document);\n",process:function(e,n){return"// Source: "+n+"\n"+e.replace(/(^|\n)[ \t]*('use strict'|"use strict");?\s*/g,"$1")}},files:{"<%= yeoman.dist %>/<%= pkg.name %>.js":["<%= yeoman.src %>/common.js","<%= yeoman.src %>/{,*/}*.js"]}},banner:{banner:"<%= meta.banner %>",src:["<%= yeoman.dist %>/<%= pkg.name %>.js"],dest:"<%= yeoman.dist %>/<%= pkg.name %>.js"}},ngmin:{dist:{files:[{expand:!0,cwd:"<%= yeoman.dist %>",src:"<%= pkg.name %>.js",dest:"<%= yeoman.dist %>"}]}},uglify:{dist:{files:{"<%= yeoman.dist %>/<%= pkg.name %>.min.js":["<%= yeoman.dist %>/<%= pkg.name %>.js"]}}}}),e.registerTask("server",["clean:server","livereload-start","connect:livereload","watch"]),e.registerTask("test",["clean:server","jshint","connect:test","karma:unit"]),e.registerTask("test-server",["clean:server","connect:test","karma:server"]),e.registerTask("build",["clean:dist","test","concat","ngmin","concat:banner","uglify"]),e.registerTask("default",["test"]),e.registerTask("bump","Increment version number",function(){function n(e,n){var t={patch:2,minor:1,major:0},s=e.split("."),r=t[n||"patch"];for(s[r]=parseInt(s[r],10)+1;++r<s.length;)s[r]=0;return s.join(".")}function t(t){var i=e.file.readJSON(t);s=i.version=n(i.version,r||"patch"),e.file.write(t,JSON.stringify(i,null,"  "))}var s,r=e.option("type");t("package.json"),t("bower.json"),e.log.ok("Version bumped to "+s)})};