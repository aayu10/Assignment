var http = require("http");
var fs = require("fs");
var qs = require("querystring")
var employeeBL = require("./EmployeeBL")
var MongoClient = require("mongodb").MongoClient;
var empId;
var name;
var basicPay;
http.createServer(function(req,res){
    console.log(req.method);
    if(req.method == "GET"){
        res.writeHead(200, {"Content-Type" : "text/html"})
        fs.createReadStream("./InsertEmployee.html", "UTF-8").pipe(res);
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
            name = obj.Name;
            basicPay = parseFloat(obj.BasicPay);
            var t = new employeeBL.Employee(basicPay);
            var netPay = t.calculateNetPay();
            res.writeHead(200, {"Content-Type" : "text/html"})
            res.end(`
            <!DocTYPE html>
            <html>
            <head>
            <title>Get converted value</title>
            </head>
            <body> 
            <form action="/" method="POST">
            <label>Employee ID </label>
            <input type="text" id="empID" value = ${empId} name="empID" required/>
     
            <label>Name</label>
            <input type="text" id="name" value = ${name} name="name" required />
     
            <label>Basic Pay</label>
            <input type="text" id="basicpay" value = ${basicPay} name="basicpay" required/>
         
            <label> Net Pay</label>
            <input type="text" id="netpay" name= "netpay" value= ${netPay} readonly />

            </form>
            </body> 
            </html>
        `);
            MongoClient.connect('mongodb://127.0.0.1:27017/employee', function(err, db){
                if(err){
                    console.log(err);
                }
                else{
                    db.collection('Employee').insert({"EmpId" : empId, "name" : name, "basicPAy" : basicPay, "netPay" : netPay},function(err, result){
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