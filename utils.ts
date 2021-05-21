/**
 * Check whether text is camelCase
 * @returns {boolean}
 */
export function isCamelCase(text: string): boolean {
	if (text === '') {
		return true
	}
	if (!text) {
		return false
	}
	return !text.match(/^[A-Z]/) && !text.match(/[-_]/)
}

/**
 * Check whether text is kebab-case
 * @returns {boolean}
 */
export function isKebabCase(text: string): boolean {
	if (text === '') {
		return true
	}
	if (!text) {
		return false
	}
	return !text.match(/[_A-Z]/)
}

/**
 * Convert camelCase text to kebab-case
 * @param {string} text
 * @returns {string}
 */
export function camelCaseToKebabCase(text: string): string {
	if (!text) {
		return ''
	}
	return text.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase()
}

/**
 * Convert kebab-case text to camelCase
 * @param {string} text
 * @returns {string}
 */
export function kebabCaseToCamelCase(text: string): string {
	if (!text) {
		return ''
	}
	return text.replace(/-([a-z])/g, (s) => s[1].toUpperCase())
}
