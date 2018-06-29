var fs = require("fs");

fs.readFile("Contents.txt", function(err, data) {
    if(err){
        console.log(err);
    }
    else{
        console.log("Asynchronous Read \n"+data.toString());
    }
});
console.log("Program Ended");
    
