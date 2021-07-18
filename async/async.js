const fs = require("fs");

fs.writeFile("./async/async.txt","Today is Awesome","UTF-8",(error)=>{

  console.log("File Created");
    console.log(error);
})


fs.writeFile("./async/Test.txt","Hello",(err)=>{
  console.log("Worked");
})

fs.readFile("./async/Test.txt",(error,data)=>{
  if(error==null)
  {
  console.log(data.toString());
}
})
