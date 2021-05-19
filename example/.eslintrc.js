const path = require('path')

module.exports = {
	extends: '@chipzhang/eslint-config/react',
	parserOptions: {
		requireConfigFile: false,
		project: [path.join(__dirname, 'tsconfig.json')],
	},
	rules: {
		'no-console': 'off',
	},
}
