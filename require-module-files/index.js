// Don't
var global = require("global")
var document = global.document

// Do
document = require("global/document")