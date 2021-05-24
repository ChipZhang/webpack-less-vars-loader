/**
 * parse the LESS source, and extract variables in `#less-vars {...}`;
 * variable names should be kebab-case, and will be converted into camelCase
 * @param {string} source
 * @returns {object}
 */
export declare function parse(source: string): Record<string, string>;
