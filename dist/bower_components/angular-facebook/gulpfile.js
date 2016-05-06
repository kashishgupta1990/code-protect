function runKarma(t,r,e){t=path.resolve(t);var a=karma.server,s=gutil.log,n=gutil.colors,u=karmaParseConfig(t,{});Object.keys(r).forEach(function(t){u[t]=r[t]}),a.start(u,function(t){s("Karma has exited with "+n.red(t)),e(),process.exit(t)})}var gulp=require("gulp"),gutil=require("gulp-util"),watch=require("gulp-watch"),connect=require("gulp-connect"),jshint=require("gulp-jshint"),stylish=require("jshint-stylish"),karma=require("karma").server,path=require("path"),karmaConf=require("./karma.conf"),karma=require("karma"),karmaParseConfig=require("karma/lib/config").parseConfig;gulp.task("lint",function(){return gulp.src(["./lib/**/*.js","./test/**/*.js"]).pipe(jshint()).pipe(jshint.reporter(stylish))}),gulp.task("watch",function(){gulp.watch(["./lib/**/*.js","./test/**/*.js"],["lint"]),gulp.run("test-dev")}),gulp.task("test",function(t){runKarma("karma.conf.js",{autoWatch:!1,singleRun:!0,browsers:["PhantomJS"]},t)}),gulp.task("test-dev",function(t){runKarma("karma.conf.js",{autoWatch:!0,singleRun:!1},t)}),gulp.task("prepare-testapp",function(){gulp.src(["./bower_components/**","./lib/**"],{base:"."}).pipe(gulp.dest("./testapp")),connect.server({root:"testapp",port:3333})}),gulp.task("default",function(){gulp.start("lint")});