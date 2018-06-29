var fs = require("fs");
var path1 = require('path')

if(process.argv.length <= 2) {
    console.log("Usage :" + __filename + " path/to ");
    process.exit(-1);
}

var path = process.argv[2];

fs.stat(path, function(err, stats) {
    if(stats.isFile()){
        console.log("Regular File");
    }
    if(stats.isDirectory()){
        console.log("Directory");
        fs.readdir(path, function(err,files){
            if(err) {
                console.log(err);
            }
            else {
                files.forEach(element => {
                    var entry = path1.join(path, element);
                    var stats =  fs.statSync(entry);
                    
                    if(stats.isFile()){
                    console.log("Regular File");
                    console.log("Size:" + stats["size"]);
                    }
                    
                    else{
                        console.log("Directory inside");
                        console.log("Size:" + stats["size"]);
                    }
                });
            }
        });
    }
});