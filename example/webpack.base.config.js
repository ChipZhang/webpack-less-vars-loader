const path = require('path')
const HTMLPlugin = require('html-webpack-plugin')

const lessLoader = {
	loader: 'less-loader',
	options: {
		lessOptions: {
			modifyVars: {
				'my-less-var3': 'black', // leading `@` can be omitted
			},
		},
	},
}

module.exports = {
	entry: {
		example: path.join(__dirname, 'src', 'example.js'),
	},
	output: {
		path: path.join(__dirname, 'build'),
		filename: '[name].js',
	},
	target: 'web',
	plugins: [new HTMLPlugin()],
	module: {
		rules: [
			{
				test: /\.less$/i,
				oneOf: [
					{
						test: /\bvars\.less$/i,
						use: [require.resolve('..'), lessLoader],
					},
					{
						use: ['style-loader', 'css-loader', lessLoader],
					},
				],
			},
		],
	},
}
