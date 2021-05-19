const {isKebabCase, kebabCaseToCamelCase} = require('./utils')

/**
 * parse the LESS source, and extract variables in `#less-vars {...}`;
 * variable names should be kebab-case, and will be converted into camelCase
 * @param {string} source
 * @returns {object}
 */
module.exports = {
	parse(source) {
		const vars = {}
		const m = source.replace(/[\r\n]/gm, ' ').match(/#less-vars\s*{([^{}]+)}/gm)
		if (m) {
			m.forEach((m) =>
				m
					.replace(/.*{|}.*/, '')
					.split(';')
					.forEach((kv) => {
						const i = kv.indexOf(':')
						if (i > 0) {
							const k = kv.substr(0, i).trim()
							const v = kv.substr(i + 1).trim()
							if (k.length > 0 && v.length > 0) {
								vars[k] = v
							}
						}
					}),
			)
		}

		const result = {}
		Object.entries(vars).forEach(([k, v]) => {
			if (!isKebabCase(k)) {
				throw new Error(`Less variable is not kebab-case: ${k}`)
			}
			result[kebabCaseToCamelCase(k)] = v
		})

		return result
	},
}
