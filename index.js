const http = require('http')

http.createServer(function (req, res) {
  res.write('Server listening on port 3000.');
  console.log('Someone just sent a request.')
  res.end(); 
}).listen(3000); 