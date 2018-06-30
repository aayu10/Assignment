var http = require("http");
var fs = require("fs");
var qs = require("querystring")
var MongoClient = require("mongodb").MongoClient;
var empId;
var name;
var basicPay;
var netPay;
http.createServer(function(req,res){
    console.log(req.method);
    if(req.method == "GET"){
        //res.writeHead(200, {"Content-Type" : "text/plain"})
        res.writeHead(200, {"Content-Type" : "text/html"})
        fs.createReadStream("./FindEmployee.html", "UTF-8").pipe(res);
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
            empId = obj.EmployeeID;
            MongoClient.connect('mongodb://127.0.0.1:27017/employee', function(err, db){
                if(err){
                    console.log(err);
                }
                else{
                    db.collection('Employee').find({"EmpId": empId}).toArray(function(err, result){
                    if(err) throw err;
                    console.log(result[0])
                    name = result[0].name;
                    basicPay = result[0].basicPAy;
                    netPay = result[0].netPay;
                    console.log("name ="+name);
                    res.writeHead(200, {"Content-Type" : "text/html"})
                    res.end(`
                    <html>
                    <head>
                        <title>
                            Employee
                        </title>        
                    </head>
                    <body>
                        <h1>Fill Employee Details</h1>
                        <form action = "/" method = "post">
                            <label>Employee ID</label>
                            <input type = "text" id = "eid" name = "EmployeeID" value = ${empId} required/>
                            <label>Name</label>
                            <input type = "text" id = "name" name = "Name" value = ${name} readonly/>
                            <label>Basic Pay</label>
                            <input type = "text" id = "basicpay" name = "BasicPay" value = ${basicPay} readonly/>
                            <label>Net Pay</label>
                            <input type = "text" id = "basicpay" name = "BasicPay" value = ${netPay} readonly/>
                            <button> Find </button>
                        </form>
                    </body>
                </html>
                    `);
                });
                db.close();
                }
           
           
        });
        });
    }
}).listen(3000);
console.log("form server listening on port 3000");
