var http = require("http");
var fs = require("fs");
var qs = require("querystring")
var MongoClient = require("mongodb").MongoClient;
var increament;
http.createServer(function(req,res){
    console.log(req.method);
    if(req.method == "GET"){
        res.writeHead(200, {"Content-Type" : "text/html"})
        fs.createReadStream("./Increament.html", "UTF-8").pipe(res);
    }
    else if (req.method == "POST"){
        var body = "";
        req.on("data",function(chunk){
            body += chunk;
            console.log("data");
        });
        req.on("end", function(){
            //console.log("end");
            var obj = qs.parse(body);
            increament = parseInt(obj.Increament);
            MongoClient.connect('mongodb://127.0.0.1:27017/employee', function(err, db){
                if(err){
                    console.log(err);
                }
                else{
                    db.collection('Employee').update({},{$set: {basicPAy : increament }}, {multi : true},function(err, result){
                    if(err) throw err;
                    res.writeHead(200, {"Content-Type" : "text/html"})
                    res.end("Updated");
                });
                db.close();
                }
           });
        });
    }
}).listen(3000);
console.log("form server listening on port 3000");