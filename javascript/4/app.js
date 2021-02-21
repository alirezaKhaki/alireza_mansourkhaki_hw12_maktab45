const http = require("http");

http
  .createServer(function (request, response) {
    if (request.url === "/" && request.method === "GET") {
      response.write("Hello Web Application");
      response.end();
    } else if (request.url === "/about" && request.method === "GET") {
      response.write("About me");
      response.end();
    } else if (request.url === "/contact-us" && request.method === "GET") {
      response.write("Contact us");
      response.end();
    } else if (request.url === "/properties" && request.method === "GET") {
      response.write("Show Properties");
      response.end();
    } else if (request.url === "/bye" && request.method === "GET") {
      response.write("Goodbye My Friend!");
      response.end();
    } else {
      response.write("Not Found");
      response.end();
    }
  })
  .listen(3000);

console.log("Server Started...");
