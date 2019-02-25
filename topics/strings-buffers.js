/* 
     >>> 3 Types of streams <<<

    1. Writable: Allow nodejs to send to a stream
    2. Redable: Allow nodejs to Read to a stream
    3. Duplex: : Allow nodejs to can read and write to a stream

*/
const fs = require("fs");

// >>> using createReadStream and it inherits eventEmiiter
// var myReadStream = fs.createReadStream("./dummyData/readMe.txt");

function steamingFile(filePath) {
  return fs.createReadStream(filePath);
}

/* example works
myReadStream is a stream when Buffer is filled with data then it will call the data by using eventEmitter
myReadStream.on("data", chunk =>
  console.log(`New chunk is received: 
  
  
  ${chunk}  
  
  `)
);*/

module.exports = {
  steamingFile
};
