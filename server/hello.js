module.exports = function(request, response) {

  var html = "<html>";
  html += "<head><title>Hello Server</title></head>";
  html += "<body><h1>Hello, Server.</h1></body>";
  html += "</html>";

  response.writeHead(200, { "Content-Type": "text/html" });
  response.end(html);

};