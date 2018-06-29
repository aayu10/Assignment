var fs = require("fs");
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
    }
    console.log("Size:" + stats["size"]);
});