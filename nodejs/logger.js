var url = require('url'),
	http = require('http'),
	server = http.createServer(function(request, response) {
		var urlparts = url.parse(request.url, true);
		console.log(urlparts.query.message);

		response.writeHead(200);
		response.end();
	});

server.listen(8080);