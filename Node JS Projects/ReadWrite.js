var fs = require('fs');

//create a readble stream
var readerStream = fs.createReadStream('Contents.txt');

//create a writer stream
var writerStream = fs.createWriteStream('Output.txt');

//Pipe the read write operations
//read contents.txt and write output.txt
readerStream.pipe(writerStream);
console.log("Program Ended");