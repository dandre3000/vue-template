const express = require('express')
const path = require('path')
const fs = require('fs')

const server = express()

server.all('/', function (req, res) {
	let data = fs.readFileSync(path.join(__dirname, '/index.html'), 'utf8')
	
	res.set('content-type','text/html')
	res.send(data.replace('ssr', 'DeAundre Payne'))
	res.end()
})

server.use('/app.css', express.static(__dirname + '/app.css'))
server.use('/client.bundle.js', express.static(__dirname + '/client.bundle.js'))
server.use('/assets/images/shin_akuma.jpg', express.static(__dirname + '/assets/images/shin_akuma.jpg'))

const PORT = process.env.PORT || 3000
server.listen(PORT, () => {
	console.log(`server listening to ${PORT}....`)
	console.log(`${__dirname}`)
	console.log('Press Ctrl+C to quit.')
})