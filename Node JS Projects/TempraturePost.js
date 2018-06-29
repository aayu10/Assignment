var http = require("http");
var fs = require("fs");
var qs = require("querystring")
var temp = require("./TempratureBL")
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
            var temp1 = obj.Temprature;
            var t = new temp.Temprature(temp1);
            console.log(temp1);
            var t2 =t.convertToCelcius();
            var objString = JSON.stringify(t2);
            res.writeHead(200, {"Content-Type" : "text/html"})
            res.end(`
                <html>
                    <head>
                        <title>Temprature</title>
                    </head>
                    <body>
                        <h1>Your temprature</h1>
                        <p>${objString}</p>
                    </body>
                </html>
            `);
        });
    }
}).listen(3000);
console.log("form server listening on port 3000");