module.exports = {
	extends: '@chipzhang/eslint-config/node',
	rules: {
		'node/shebang': [
			'error',
			{
				convertPath: {
					'**/*.ts': ['^(.*)\\.ts$', '$1.js'],
				},
			},
		],
	},
}
