var Config = require('./config.js');
var HTTP = require('http');
var URLHelper = require('./lib/url-helper.js');

var server = HTTP.createServer(function (req, res) {

  /* Normalize request path, trimming any trailing slashes */
  var path = URLHelper.normalizeURL(req.url);
  
  switch(path) {

    /* Proxy handles any recognized routes */
    case '/hello-server':
      require('./server/hello.js')(req, res);
      break;

    /* Otherwise, fall back to default response */
    default:
      require('./server/default.js')(req, res);
  }

});

server.listen(Config.SERVER_PORT, Config.SERVER_HOST);
