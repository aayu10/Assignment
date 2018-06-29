var fs = require("fs");
console.log("Before Writing");

fs.writeFile("Sample.txt","Sample File",function(err) {
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
