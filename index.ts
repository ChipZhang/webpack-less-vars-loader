// based on source code of `raw-loader`

import {parse} from './parse'

export default function webpackLessVarsLoader(source: string): string {
	const esModule = true // outputs ES module or CommonJS?

	const j = JSON.stringify(parse(source))
		.replace(/\u2028/g, '\\u2028')
		.replace(/\u2029/g, '\\u2029')

	return `${esModule ? 'export default' : 'module.exports ='} ${j};`
}
