var secureCode = require('../');
var option = {
    sourceDir:'./sample-codebase',
    destinationDir:'./new-sample-codebase'
};

secureCode(option,function(err,data){
    console.log(arguments);
});