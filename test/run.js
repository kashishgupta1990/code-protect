var codeProtect = require('../');
var option = {
    sourceDir: './sample-codebase',
    destinationDir: './new-sample-codebase',
    uglify:true,
    debug: true
};

codeProtect(option, function (err, data) {
    if (err) {
        throw err;
    } else {
        console.log(data);
    }
});