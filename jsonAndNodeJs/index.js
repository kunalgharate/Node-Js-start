// const object = {
//     "name":"Kunal",
//     "age":27,
//     "isMarried": false
// }
//
// console.log("This is json \n"); //Object to json
//
// console.log(JSON.stringify(object)+"\n"); //Object to json
//
//
//
// console.log("This is object \n"); // Json to Object
//
// const jsonToObj = JSON.stringify(object)
// console.log(jsonToObj); //Json to Object


const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {

  console.log(__dirname);

  if (req.url == "/home") {
    res.end("Hello Home");
  }
  if (req.url == "/userapi.json") {
    res.writeHead(200, {
      "Content-type": "application/json"
    });
    fs.readFile(`${__dirname}/data.json`, "utf-8", (err, data) => {
      res.end(data + "Hello");
    });

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
