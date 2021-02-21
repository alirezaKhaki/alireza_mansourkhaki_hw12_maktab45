const http = require("http");
const fs = require("fs");

http
  .createServer(function (request, response) {
    if (request.url === "/" && request.method === "GET") {
      fs.readFile("./public/index.html", (err, page) => {
        response.write(page);
        response.end();
      });
    }
  })
  .listen(8888);

console.log("Server Started...");
