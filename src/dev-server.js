const express = require('express')
const path = require('path')
const webpack = require('webpack')

const config = require('../webpack.client.js')
const compiler = webpack(config)

const server = express()

// routing must be above webpack-dev-middleware & webpack-hot-middleware
server.all('/', function (req, res) {
	let data = compiler.outputFileSystem.readFileSync(path.join(compiler.outputPath,'index.html'), 'utf8')
	
	res.set('content-type','text/html')
	res.send(data.replace('ssr', 'DeAundre Payne'))
	res.end()
})

server.use(
	require('webpack-dev-middleware')(compiler, {
		publicPath: config.output.publicPath
	})
)
server.use(
	require('webpack-hot-middleware')(compiler, {
		path: '/__webpack_hmr',
		log: console.log
	})
)

const PORT = process.env.PORT || 3000
server.listen(PORT, () => {
	console.log(`server listening to ${PORT}....`)
	console.log(`${__dirname}`)
	console.log('Press Ctrl+C to quit.')
})