var http = require("http");
var fs = require("fs");
var qs = require("querystring")
var temp = require("./TempratureBL")
var MongoClient = require("mongodb").MongoClient;
var temp1;
var objString;
http.createServer(function(req,res){
    console.log(req.method);
    if(req.method == "GET"){
        //res.writeHead(200, {"Content-Type" : "text/plain"})
        res.writeHead(200, {"Content-Type" : "text/html"})
        fs.createReadStream("./TempratureForm.html", "UTF-8").pipe(res);
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
            temp1 = obj.Temprature;
            var t = new temp.Temprature(temp1);
            console.log(temp1);
            var t2 =t.convertToCelcius();
            objString = JSON.stringify(t2);
            res.writeHead(200, {"Content-Type" : "text/html"})
            res.end(`
                <html>
                    <head>
                        <title>
                            Temprature Converter
                        </title>        
                    </head>
                    <body>
                        <h1>Fill temprature</h1>
                        <form action = "/" method = "post">
                            <label>Temprature</label>
                            <input type = "text" id = "temper" name = "Temprature" value = ${temp1} />
                            <label>Converted Temprature</label>
                            <input type = "text" id = "convertedTemper" name = "ConvertedTemprature" value = ${objString} readonly/>
                            <button>Calculate</button>
                        </form>
                    </body>
                </html>
            `);
            MongoClient.connect('mongodb://127.0.0.1:27017/Temprature', function(err, db){
                if(err){
                    console.log(err);
                }
                else{
                    db.collection('temprature').insert({"Farenheit" : temp1, "Celcius": objString},function(err, result){
                    if(err) throw err;
                    console.log("Inserted");
                });
                db.close();
                }
            });
        });
    }
}).listen(3000);
console.log("form server listening on port 3000");