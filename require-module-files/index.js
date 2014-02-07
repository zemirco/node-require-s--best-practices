// don't
var global = require("./global/");
var a_glob = global.a;
var b_glob = global.b;

a_glob();
b_glob();

// do
var submodules = require('./submodules/');
var a_sub = submodules.a;
var b_sub = submodules.b;

a_sub();
b_sub();

// do alternatively
var a_direct = require('./submodules/a');

a_direct();