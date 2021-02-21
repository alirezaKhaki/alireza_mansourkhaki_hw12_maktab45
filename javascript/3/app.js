const http = require("http");

http
  .createServer(function (request, response) {
    console.log(request.url);
  })
  .listen(3000);

console.log("Server Started...");
