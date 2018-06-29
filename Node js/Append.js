var fs = require("fs");
console.log("Before Writing");

fs.appendFile("Sample.txt"," Append File",function(err) {
    if(err){
        return console.error(err);
    }
    console.log("Data written successfully");
    console.log("Reading written data");
    fs.readFile("Sample.txt", function(err, data) {
    if(err){
        return console.error(err);
    }
    console.log("Written content : "+data.toString());
    });
});
