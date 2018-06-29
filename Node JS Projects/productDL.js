var product = require("./productBL");
var MongoClient = require("mongodb").MongoClient;
MongoClient.connect('mongodb://127.0.0.1:27017/sample', function(err,db){
    if(err){
        console.log(err);
    }
    db.collection('products').find().toArray(function(err,result){
        if (err) throw err;
        console.log(result);
        for(var i = 0; i < result.length; i++){
            var totAmt = product.calculateAmount(result[i].quantity, result[i].price);
            console.log("Amount = " + totAmt);
            db.collection('products').update({productId : result[i].productId },{$set : {"amount": totAmt}}, function(err,res){
            if(err) throw err;
                console.log("Updated");
                
            });
        }
        db.close();
    })
});