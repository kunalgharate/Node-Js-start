const fs = require("fs"); // import  file library

//fs.mkdirSync("myFolder"); //create folder

//fs.writeFileSync("myFolder/myFile","Vikrant","UTF-8"); // create myFile

//fs.appendFileSync("myFolder/myFile","\n Hello"); // append file

//console.log(fs.readFileSync("myFolder/myFile","UTF-8")) // print data from file

//fs.unlinkSync("myFolder/myFile")

fs.rmdirSync("myFolder")