var fs = require('fs');
var data = "Mean Mern Stack Training";

//create a writable stream
var writeStream = fs.createWriteStream('Output.txt');

//write the data to stream
writeStream.write(data);

//mark the end of file
writeStream.end();

//Handle stream events --> finish and error
writeStream.on('finish',function(){
    console.log("Write Completed")
})

writeStream.on('error',function(err){
    console.log(err.stack);
})

console.log("Program Ended")