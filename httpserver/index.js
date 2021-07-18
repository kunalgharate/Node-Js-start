const http = require("http");

const server = http.createServer((req, res) => {

  if (req.url == "/home") {
    res.end("Hello Home");
  } else {
    res.writeHead(404, {
      "Content-type": "text/html"
    })
    res.end("Something went wrong")
  }

});

server.listen(3000, "127.0.0.1", () => {
  console.log("listening to port 3000")
})
