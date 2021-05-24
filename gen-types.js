#!/usr/bin/env node
"use strict";
/**
 * Generate `*.less.d.ts` for `*.less` file.
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable no-console */
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
const parse_1 = require("./parse");
function main() {
    if (process.argv.length < 3) {
        console.error(`
Generate \`*.less.d.ts\` for \`*.less\` file.

Usage:
node "${__filename}" <less-file> [output-dir]

<less-file> The source \`*.less\` file to extract variables from;
  Variables should be defined in sections \`#less-vars {...}\`;
  Variable names should be kebab-case, and will be converted into camelCase;

[output-dir] The directory to output the generated file \`*.less.d.ts\`;
  Will use the same directory as the source file by default;
`);
        return;
    }
    const sourceFile = process.argv[2];
    let outDir = path_1.default.dirname(sourceFile);
    if (process.argv.length >= 4) {
        outDir = process.argv[3]; // eslint-disable-line prefer-destructuring
        fs_1.default.mkdirSync(outDir, { recursive: true });
    }
    const outFile = path_1.default.join(outDir, `${path_1.default.basename(sourceFile)}.d.ts`);
    const source = fs_1.default.readFileSync(sourceFile, { encoding: 'utf-8' });
    const vars = parse_1.parse(source);
    const types = Object.keys(vars).map((k) => `\t'${k}': string`);
    const content = `const lessVars: {
${types.join('\n')}
}
export default lessVars
`;
    fs_1.default.writeFileSync(outFile, content, { encoding: 'utf-8' });
    console.info(`Generated \`${outFile}\``);
}
main();
