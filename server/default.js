Jade = require('jade');

module.exports = function(request, response) {

  html = Jade.renderFile(__dirname + '/../templates/server/default.jade');

  response.writeHead(200, { "Content-Type": "text/html" });
  response.end(html);

};