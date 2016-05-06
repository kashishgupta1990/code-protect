var esprima = require('esprima');
var fs = require('fs');
var toString = require('escodegen').generate;
var confusion = require('confusion');
var path = require('path');

var fs = require('fs');
var walk = function(dir, done) {
    var results = [];
    fs.readdir(dir, function(err, list) {
        if (err) return done(err);
        var i = 0;
        (function next() {
            var file = list[i++];
            if (!file) return done(null, results);
            file = dir + '/' + file;
            fs.stat(file, function(err, stat) {
                if (stat && stat.isDirectory()) {
                    walk(file, function(err, res) {
                        results = results.concat(res);
                        next();
                    });
                } else {
                    results.push(file);
                    next();
                }
            });
        })();
    });
};

var onlyJsFile = function(dirPath,callback){
    var filesArr = [];
    walk('.',function(err,data){
        console.log(data.length);
        data.forEach(function(filePath){
            if(path.extname(filePath) === '.js'){
                filesArr.push(filePath);
            }
        });
        callback(null,filesArr);
    });
};

onlyJsFile('.',function(err,data){

});





fs.readFile('source-code/hello.js',function(err,data){

    if(err) throw err;
    //console.log(data);
    var ast = esprima.parse(data);
    var obfuscated = confusion.transformAst(ast, confusion.createVariableName);
    console.log(toString(obfuscated));
});



