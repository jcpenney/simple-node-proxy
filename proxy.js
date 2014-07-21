var Config = require('./config.js');
var HTTP = require('http');
var Request = require('request');
var URLHelper = require('./lib/url-helper.js');

var server = HTTP.createServer(function (req, res) {
  
  /* Normalize request path, trimming any trailing slashes */
  var path = URLHelper.normalizeURL(req.url);
  
  switch(path) {
    
    /* Proxy handles any recognized routes */
    case '/hello-proxy':
      require('./proxy/hello.js')(req, res);
      break;

    /* Otherwise, forwards request to server, then passes through response */
    default:
      var url = "http://:" + Config.SERVER_PORT + path;
      Request.get(url).pipe(res);
  }

});

server.listen(Config.PROXY_PORT, Config.PROXY_HOST);
