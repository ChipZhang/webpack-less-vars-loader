"use strict";
// based on source code of `raw-loader`
Object.defineProperty(exports, "__esModule", { value: true });
const parse_1 = require("./parse");
function webpackLessVarsLoader(source) {
    const esModule = true; // outputs ES module or CommonJS?
    const j = JSON.stringify(parse_1.parse(source))
        .replace(/\u2028/g, '\\u2028')
        .replace(/\u2029/g, '\\u2029');
    return `${esModule ? 'export default' : 'module.exports ='} ${j};`;
}
exports.default = webpackLessVarsLoader;
