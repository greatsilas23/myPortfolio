const http = require('http')
const fs = require('fs')
const url = require('url')
http.createServer(function (req, res){
	fs.readFile("." + url.parse(req.url, true).pathname, (err, data) => {
		if(err){
			res.write('File not found')
		}		
		res.end(data)

	})

}).listen(4000)
