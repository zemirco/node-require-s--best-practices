# Node.js require(s) best practices

Some best practices / conventions when using Node's `require()`.

##### 1. [Order](https://github.com/zeMirco/node-require-s--best-practices/blob/master/require-order/index.js)

Have a consistent order when requiring modules.

- core modules first
- then public ones from npm / `node_modules`
- then your own ones

```js
// 1. core modules
var fs = require('fs');
var http = require('http');

// 2. public modules from npm
var express = require('express');
var uuid = require('node-uuid');

// 3. your own modules from file
var myMod = require('./mod.js');
```

##### 2. [Naming](https://github.com/zeMirco/node-require-s--best-practices/blob/master/require-names/index.js)

Give corresponding variable names.

```js
// don't
var save = require('./remove');

// do
var remove = require('./remove');
```

##### 3. [JSON](https://github.com/zeMirco/node-require-s--best-practices/blob/master/require-json/index.js)

Include `.json` in filename.

```js
// don't
var data = require('./data');

// do
var data = require('./data.json');
```

##### 4. [Folder](https://github.com/zeMirco/node-require-s--best-practices/blob/master/require-folder/index.js)

Append slash when requiring `./FOLDER/index.js`

```js
// don't
var data = require('./data');

// do
var data = require('./data/');
```

##### 5. [Override core modules](https://github.com/zeMirco/node-require-s--best-practices/blob/master/override-core-modules/index.js)

Do not override core modules.

```js
// don't
var fs = require('./fs');

// do
var fs = require('fs');
var myFs = require('./fs');

// or even better
var fs = require('fs');
var myFs = require('./my-fs');
```

##### 6. [Nested objects](https://github.com/zeMirco/node-require-s--best-practices/blob/master/require-nested-method/index.js)

Require module first and then create shortcut.

```js
// don't
var readFile = require('fs').readFile;

// do
var fs = require('fs');
var readFile = fs.readFile;
```


##### 7. [Module files](https://github.com/zeMirco/node-require-s--best-practices/blob/master/require-module-files/index.js)

Organise your modules so that you can require sub-files

```js
// don't
var isoblend = require("isoblend")
var normal = isoblend.normal

// do
normal = require("isoblend/normal")
```

## Imprint

These are my own best practices and not related to Joyent or Node.js.

## License

Copyright (C) 2014 [Mirco Zeiss](mailto: mirco.zeiss@gmail.com)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
