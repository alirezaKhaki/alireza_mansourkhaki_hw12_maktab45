const http = require("http");

http
  .createServer(function (request, response) {
    if (request.url === "/" && request.method === "GET") {
      response.write("Hello World");
      response.end();
    } else {
      response.write("Not Found");
      response.end();
    }
  })
  .listen(8888);

console.log("Server Started...");
