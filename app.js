const http = require('http');
const fs = require('fs');

const hostname = '127.0.0.1';
const port = 9090;

fs.readFile('index.html', function(err, html) {
  if(err) {
    throw err;
  }

  const server = http.createServer(function(req, res) {
    res.statusCode = 200;
    res.setHeader('Content-type', 'text/html');
    res.write(html);
    res.end();
  });

  server.listen(port, function(hostname) {
    console.log('Server started on port ' + port );
  });
});
