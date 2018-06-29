var fs = require("fs");

fs.unlink("Sample.txt",function(err, data) {
    if(err){
        console.log(err);
    }
    else{
        console.log("Deleted Successfully");
    }
});
