const http = require("http");
const fs = require("fs");

http
  .createServer(function (request, response) {
    if (request.url === "/" && request.method === "GET") {
      response.write("Hello World");
      response.end();
    } else if (request.url === "/json" && request.method === "GET") {
      fs.readFile("file.json", "utf8", (err, data) => {
        response.write(data);
        response.end();
      });
    } else {
      response.write("Not Found");
      response.end();
    }
  })
  .listen(8888);

console.log("Server Started...");
