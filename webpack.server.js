const nodeExternals = require('webpack-node-externals');
const { merge } = require('webpack-merge')
const base = require('./webpack.base.js')

module.exports = merge(base, {
	name: 'server',
	target: 'node',
	node: { // __dirname is set to output path
		__dirname: false,
		__filename: false,
	},
	externals: [nodeExternals()],
	entry: process.env.NODE_ENV === 'development'? './src/dev-server.js' : './src/server.js', // ./src/index.js
	output: {
		filename: 'server.bundle.js' // main.js
	}
})