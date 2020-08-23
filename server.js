const http = require("http");
const fs = require("fs");
const path = require("path");

const server = http.createServer(function (req, res) {
  let filePath = "." + req.url;
  if (filePath == "./") filePath = "./index.html";

  filePath = filePath.replace(/[?].*/g, "");

  var extname = path.extname(filePath);
  var contentType = "text/html";
  switch (extname) {
    case ".js":
      contentType = "text/javascript";
      break;
    case ".css":
      contentType = "text/css";
      break;
    case ".svg":
      contentType = "image/svg+xml";
      break;
    case ".png":
      contentType = "image/png";
      break;
    case ".jpg":
      contentType = "image/jpg";
      break;
  }

  console.log("serving", filePath);
  fs.readFile(filePath, function (error, content) {
    res.writeHead(200, { "Content-Type": contentType });
    res.end(content, "utf-8");
  });
});

const port = process.env.SERVER_PORT || 8080;
const host = process.env.SERVER_HOST || "0.0.0.0";
server.listen(port, host);
console.log(`listenting on ${host}:${port}`);
