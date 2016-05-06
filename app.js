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
    walk(dirPath, function (err, data) {
        if (err) {
            callback({FilePath: dirPath, err: err});
        } else {
            data.forEach(function (filePath) {
                if (path.extname(filePath) === '.js') {
                    filesArr.push(filePath);
                }
            });
            callback(null, filesArr);
        }

    });
};

onlyJsFile('./dist/bower_components', function (err, dataList) {
    var tasks = [];

    if (err) {
        throw err;
    } else {
        dataList.forEach(function (filePath) {
            tasks.push(function (done) {
                    fs.readFile(filePath, function (err, data) {
                        if (err) {
                            done(err);
                        } else {
                            var ast = esprima.parse(data);
                            var obfuscated = confusion.transformAst(ast, confusion.createVariableName);

                            fs.writeFile(filePath, toString(obfuscated), function (err) {
                                if (err) {
                                    done(err);
                                } else {
                                    console.log('File: ', filePath, ' DONE');
                                    done(null, 'done');
                                }
                            });
                        }
                    });
                }
            );


        });

        async.series(tasks, function (err, result) {
            if (err) {
                throw err;
            } else {
                console.log('job done');
            }
        });
    }
});



