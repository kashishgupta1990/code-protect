var secureCode = require('../');

secureCode('./sample-codebase',function(err,data){
    console.log(arguments);
});