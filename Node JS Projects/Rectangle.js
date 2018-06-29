var MongoClient = require("mongodb").MongoClient;
MongoClient.connect('mongodb://127.0.0.1:27017/sample', function(err, db){
    if(err){
        console.log(err);
    }
    else{
        var resultSet = db.collection('rectangle').find();
        resultSet.toArray(function(err ,result){
            if(err) throw err;
            else{
                console.log(result[0].length*result[0].breadth);
            }
        });
    }
    db.close();
});
