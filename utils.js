"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.kebabCaseToCamelCase = exports.camelCaseToKebabCase = exports.isKebabCase = exports.isCamelCase = void 0;
/**
 * Check whether text is camelCase
 * @returns {boolean}
 */
function isCamelCase(text) {
    if (text === '') {
        return true;
    }
    if (!text) {
        return false;
    }
    return !text.match(/^[A-Z]/) && !text.match(/[-_]/);
}
exports.isCamelCase = isCamelCase;
/**
 * Check whether text is kebab-case
 * @returns {boolean}
 */
function isKebabCase(text) {
    if (text === '') {
        return true;
    }
    if (!text) {
        return false;
    }
    return !text.match(/[_A-Z]/);
}
exports.isKebabCase = isKebabCase;
/**
 * Convert camelCase text to kebab-case
 * @param {string} text
 * @returns {string}
 */
function camelCaseToKebabCase(text) {
    if (!text) {
        return '';
    }
    return text.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
}
exports.camelCaseToKebabCase = camelCaseToKebabCase;
/**
 * Convert kebab-case text to camelCase
 * @param {string} text
 * @returns {string}
 */
function kebabCaseToCamelCase(text) {
    if (!text) {
        return '';
    }
    return text.replace(/-([a-z])/g, (s) => s[1].toUpperCase());
}
exports.kebabCaseToCamelCase = kebabCaseToCamelCase;
