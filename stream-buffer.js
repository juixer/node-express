const http = require("http");
const fs = require("fs");

// creating a server using raw node.js

const server = http.createServer();

// listener

server.on("request", (req, res) => {
  if (req.url === "/read-file" && req.method === "GET");
  const readableStream = fs.createReadStream(process.cwd() + "/read.txt");

  readableStream.on("data", (buffer) => {
    res.write(buffer);
  });

  readableStream.on("end", () => {
    res.end("Hello from the other side");
  });
});

server.listen(5000, () => {
  console.log(`server listening on port 5000`);
});
