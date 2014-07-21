Jade = require('jade');

module.exports = function(request, response) {

  html = Jade.renderFile(__dirname + '/../templates/proxy/hello.jade');

  response.writeHead(200, { "Content-Type": "text/html" });
  response.end(html);

};