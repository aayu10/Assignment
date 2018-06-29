var fs = require("fs");
try{
    var data = fs.readFileSync("Contents.txt");
    console.log("Synchronous Read \n"+data.toString());

}
catch(err){
    console.log("Error"+err);
}
console.log("Program Ended");