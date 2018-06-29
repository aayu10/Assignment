var fs = require("fs");

fs.link("Contents.txt", "Sample.txt",function(err, data) {
    if(err){
        console.log(err);
    }
    else{
        console.log("Copied Successfully");
    }
});
