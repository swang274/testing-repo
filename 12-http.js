const http = require("http");
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Welcome to our home page");
  }
  if (req.url === "/about") {
    res.end("result");
  }
  res.end(`<h1>Oops!</h1>
  <p> we can't seem to find the page you looking for</p>`);
});

server.listen(5000);
