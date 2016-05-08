#!/usr/bin/env node

var program = require('commander');
var secureCode = require('.');
var package = require('./package.json');
var option = {
    sourceDir: '',
    destinationDir: '',
    uglify:false,
    debug: false
};

program
    .version(package.version)
    .usage('[options] -s <source-directory-path> Warning: By Default destination directory set as source directory path.')
    .option('-s, --source <source-directory-path>', 'mention the source directory path.')
    .option('-d, --destination <destination-directory-path>', 'mention destination directory path.')
    .option('-u, --uglify <true/false>', 'uglification on files')
    .option('-x, --debug <true/false>', 'debug mode')
    .parse(process.argv);

option.sourceDir = program.source;
option.destinationDir = program.destination;
option.uglify = program.uglify;
option.debug = program.debug;

if(program.source){
    secureCode(option,function(err,result){
        if(err){
            throw err;
        }else{
            console.log(result);
        }
    })
}else{
    console.log('\nArgument missing, Try command: `code-protect -h` to get more help\n');
}