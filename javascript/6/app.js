const http = require("http");
const fs = require("fs");

http
  .createServer(function (request, response) {
    if (request.url === "/" && request.method === "GET") {
      fs.readFile("./public/index.html", "utf8", (err, page) => {
        response.write(page);
        response.end();
      });
    } else if (request.url === "/assets/main.js" && request.method === "GET") {
      fs.readFile("./public/assets/main.js", (err, page) => {
        response.write(page);
        response.end();
      });
    } else if (
      request.url === "/assets/style.css" &&
      request.method === "GET"
    ) {
      fs.readFile("./public/assets/style.css", (err, page) => {
        response.write(page);
        response.end();
      });
    } else if (request.url === "/img/01.jpg" && request.method === "GET") {
      fs.readFile("./public/img/01.jpg", (err, page) => {
        response.write(page);
        response.end();
      });
    } else if (request.url === "/img/02.jpg" && request.method === "GET") {
      fs.readFile("./public/img/02.jpg", (err, page) => {
        response.write(page);
        response.end();
      });
    } else if (request.url === "/img/03.jpg" && request.method === "GET") {
      fs.readFile("./public/img/03.jpg", (err, page) => {
        response.write(page);
        response.end();
      });
    } else if (request.url === "/img/04.jpg" && request.method === "GET") {
      fs.readFile("./public/img/04.jpg", (err, page) => {
        response.write(page);
        response.end();
      });
    } else if (request.url === "/img/05.jpg" && request.method === "GET") {
      fs.readFile("./public/img/05.jpg", (err, page) => {
        response.write(page);
        response.end();
      });
    } else if (request.url === "/img/06.jpg" && request.method === "GET") {
      fs.readFile("./public/img/06.jpg", (err, page) => {
        response.write(page);
        response.end();
      });
    } else {
      response.write("Bad Request");
      response.end();
    }
  })
  .listen(8888);

console.log("Server Started...");
