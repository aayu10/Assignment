var MongoClient = require("mongodb").MongoClient;
var bankdetails = {"BankId" : "B004", "BankName" : "ICICI", "BackLocation" : "Navlakha"};
MongoClient.connect('mongodb://127.0.0.1:27017/sample', function(err, db){
    if(err){
        console.log(err);
    }
    var resultSet = db.collection('Bank').insert(bankdetails, function(err,result){
        if(err) throw err;
        console.log("Inserted");
    });
    db.close()
});