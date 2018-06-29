var fs = require('fs');
var data = '';

//creatiung a readable stream
var readerStream = fs.createReadStream('Contents.txt');

//Handle stream evenets --> data, end and error
readerStream.on("data",function(chunk){
    data += chunk;    
});

readerStream.on("end",function(){
    console.log(data);
})

readerStream.on("error",function(err){
    console.log(err)
});