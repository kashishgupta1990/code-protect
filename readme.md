# Code Protect

It's a module which convert your `JavaScript` code into some not understandable format and still it's executable.
This module can be used to protect the code base which run's on browser's client side or we can protect the NodeJs code base as well.
We have to mention the few options provided where `sourceDir` is mandatory field. Just mention the root path in this field and `code-protect` converts all the `.js` files present in sub-folder.  

## Module Usage 

### Install
 `npm install code-protect --save`

### Usage
> Module Require:
```javascript
var codeProtect = require('code-protect');
```
> Options: `sourceDir` is a mandatory field
```javascript
var option = {
    sourceDir: './sample-codebase',
    destinationDir: './new-sample-codebase',
    uglify:true,
    debug: true
};
```
> Method Use:
```javascript
codeProtect(option, function (err, data) {
    if (err) {
        throw err;
    } else {
        doSomething......
    }
});
```

### `JavaScript` Sample Code:
```javascript
var codeProtect = require('code-protect');
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
```

## Command Usage

### Install
 `npm install code-protect -g`

### Usage
 `Usage:` code-protect [options] -s <source-directory-path> 
 `Warning: By Default destination directory set as source directory path.`

####  `Options:`
-     -h, --help,                                      output usage information
-     -V, --version,                                   output the version number
-     -s, --source <source-directory-path>,            mention the source directory path.
-     -d, --destination <destination-directory-path>,  mention destination directory path.
-     -u, --uglify <true/false>,                       uglification on files
-     -x, --debug <true/false>,                        debug mode


