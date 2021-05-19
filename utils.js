module.exports = {
	/**
	 * Check whether text is camelCase
	 * @returns {boolean}
	 */
	isCamelCase(text) {
		if (text === '') {
			return true
		}
		if (!text) {
			return false
		}
		return !text.match(/^[A-Z]/) && !text.match(/[-_]/)
	},

	/**
	 * Check whether text is kebab-case
	 * @returns {boolean}
	 */
	isKebabCase(text) {
		if (text === '') {
			return true
		}
		if (!text) {
			return false
		}
		return !text.match(/[_A-Z]/)
	},

	/**
	 * Convert camelCase text to kebab-case
	 * @param {string} text
	 * @returns {string}
	 */
	camelCaseToKebabCase(text) {
		if (!text) {
			return ''
		}
		return text.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase()
	},

	/**
	 * Convert kebab-case text to camelCase
	 * @param {string} text
	 * @returns {string}
	 */
	kebabCaseToCamelCase(text) {
		if (!text) {
			return ''
		}
		return text.replace(/-([a-z])/g, (s) => s[1].toUpperCase())
	},
}
