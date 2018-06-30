var emp = require("./EmployeeBL");
var MongoClient = require("mongodb").MongoClient;
MongoClient.connect('mongodb://127.0.0.1:27017/employee', function(err,db){
    if(err){
        console.log(err);
    }
    db.collection('Employee').find().toArray(function(err,result){
        if (err) throw err;
        console.log(result);
        for(var i = 0; i < result.length; i++){
            var basicPay = result[i].basicPAy;
            var employee = new emp.Employee(basicPay);
            var netAmt = employee.calculateNetPay();
            console.log("Amount = " + netAmt);
            db.collection('Employee').update({EmpId : result[i].EmpId },{$set : {"netPay": netAmt}}, function(err,res){
            if(err) throw err;
                console.log("Updated");
                
            });
        }
        db.close();
    })
});