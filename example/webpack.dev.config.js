const base = require('./webpack.base.config')

module.exports = {
	...base,
	mode: 'development',
	devServer: {
		contentBase: false,
	},
}
