const fs = require("fs");
const http = require("http");


const server = http.createServer();
  server.on('request',(req ,res)=>{

      const restream = fs.createReadStream("input.txt");

      // restream.on("data",(chunkdata)=>{
      //   res.write(chunkdata);
      // });
      // restream.on("end",()=>{
      //   res.end();
      // });
      restream.pipe(res);
  });

  server.listen(3000, "127.0.0.1", () => {
    console.log("listening to port 3000")
  });
