var fs = require("fs");
fs.mkdir("./asdf",function(err, files){
    if(err){
        console.log("Error" + err);
    }
    else{
        console.log(files);
    }
});