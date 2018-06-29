var fs = require("fs");
fs.rmdir("./dfs",function(err, files){
    if(err){
        console.log("Error" + err);
    }
    else{
        console.log(files);
    }
});