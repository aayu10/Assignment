var fs = require("fs");
fs.readdir("./lib",function(err, files){
    if(err){
        console.log("Error" + err);
    }
    else{
        console.log(files);
    }
});