module.exports = function(request, response) {

  var html = "<html>";
  html += "<head><title>Default Server Response</title></head>";
  html += "<body><h1>Default Server Response</h1></body>";
  html += "</html>";

  response.writeHead(200, { "Content-Type": "text/html" });
  response.end(html);

};