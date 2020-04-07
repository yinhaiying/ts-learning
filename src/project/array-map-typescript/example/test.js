"use strict";
exports.__esModule = true;
var arrMap = require("../dist/array-map");
console.log(arrMap([1, 2], function (item) {
    return item += 2;
}));
