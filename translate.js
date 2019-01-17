'use strict';
var babelCore = require('babel-core');
module.exports = function (content, file, settings) {
    var result = babelCore.transform(content, settings);
    return result.code;
};