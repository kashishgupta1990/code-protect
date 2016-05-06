var esprima = require('esprima');
var fs = require('fs');
var toString = require('escodegen').generate;
var confusion = require('confusion');
var path = require('path');
var async = require('async');

var fs = require('fs');
var walk = function (dir, done) {
    var results = [];
    fs.readdir(dir, function (err, list) {
        if (err) return done(err);
        var i = 0;
        (function next() {
            var file = list[i++];
            if (!file) return done(null, results);
            file = dir + '/' + file;
            fs.stat(file, function (err, stat) {
                if (stat && stat.isDirectory()) {
                    walk(file, function (err, res) {
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

var onlyJsFile = function (dirPath, callback) {
    var filesArr = [];
    walk('.', function (err, data) {
        console.log(data.length);
        data.forEach(function (filePath) {
            if (path.extname(filePath) === '.js') {
                filesArr.push(filePath);
            }
        });
        callback(null, filesArr);
    });
};

onlyJsFile('./dist/script2', function (err, data) {
    var tasks = [];

    data.forEach(function (filePath) {

        tasks.push(function (err, done) {
            fs.readFile(filePath, function (err, data) {
                if (err) throw err;
                var ast = esprima.parse(data);
                var obfuscated = confusion.transformAst(ast, confusion.createVariableName);
                fs.writeFile(filePath, toString(obfuscated), function (err) {
                    if (err) {
                        done(err);
                    } else {
                        done(null, 'done');
                    }
                });
            });

        });

        async.parallel(tasks, function (err, result) {
            if (err) {
                throw err;
            } else {
                console.log('job done');
            }
        });
    });

});



