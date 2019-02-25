const http = require("http");
const stream = require("./topics/strings-buffers");
const hostname = "127.0.0.1"; //  ipAddress
const port = 3002;

const server = http.createServer((req, res) => {
  // statusCode + contnetType >>>> res.writeHead(200, { "Content-Type", "text/plain" }): check in response header in browser
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html");
  res.setHeader("httpVersion", req.httpVersion);
  stream.steamingFile("./topics/serving-html.html").pipe(res);

  //res.end("Hello World\n");
});

server.listen(port, hostname, res => {
  console.log(`Server running at http://${hostname}:${port}`);
});

/*  const stream = require("./topics/strings-buffers"); stream.myReadStream.pipe(res);*/
