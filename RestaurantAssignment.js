// 1
db.Restraurant.find()

//2
db.Restraurant.find({},{restaurant_id : 1, name : 1, cuisine : 1})

//3
db.Restraurant.find({},{_id : 0 ,restaurant_id : 1, name : 1, cuisine : 1})

//4
db.Restraurant.find({},{_id : 0 ,restaurant_id : 1, name : 1, "address.pincode" : 1})

//5
db.Restraurant.find({"address.city" : "Chennai"})

//6
db.Restraurant.find({"address.city" : "Chennai"}).limit(5)

//7
db.Restraurant.find({"address.city" : "Chennai"}).skip(5).limit(5)

//8
db.Restraurant.find({ratings : { $elemMatch:{"score":{$gt : 9}}}});

//9
db.Restraurant.find({$and :[ {"ratings.score":{$gt : 8 }},{"ratings.score":{$lt : 10 }}]})
db.Restraurant.find({ratings : { $elemMatch:{"score":{$gt : 8 , $lt :10}}}});

//11
db.Restraurant.find( {$and : [{ cuisine: { $nin: ["Thai"] } },{"ratings.score" : {$gt :7 }}]})

//12
db.Restraurant.find( {$and : [{ cuisine: { $nin: ["Spanish"] } },{"ratings.score" : {$gt :7 }}]})

//13
db.Restraurant.find( {$and : [{ cuisine: { $nin: ["Spanish"] } },{"ratings.score" : {$gt :7 }}]}).sort({"cuisine":-1});

//14
db.Restraurant.find( {name : {$regex : "^McD"}} ,{"restaurant_id" : 1,"name" : 1,"cuisine" : 1 })

//15
db.Restraurant.find( {name : {$regex : "..nal.."}} ,{"address.city" : 1,"name" : 1,"cuisine" : 1 })

//16
db.Restraurant.find( {name : {$regex : "ay $"}} ,{"address.city" : 1,"name" : 1,"cuisine" : 1 })

//17
db.Restraurant.find({$or : [{cuisine : {$in : ["Spanish", "Chinese"]}}]},{"district" : "Chennai"})

//18
db.Restraurant.find({"district" :{$in :["Chennai","Indore"]}},{"restaurant_id" : 1,"name":1,"district":1,"cuisine" :1});

//19
db.Restraurant.find({"district" :{$nin :["Chennai","Indore"]}},{"restaurant_id" : 1,"name":1,"district":1,"cuisine" :1});

//20
db.Restraurant.find({"ratings.score" : {$lt : 5 }},{"restaurant_id" : 1,"name":1,"district":1,"cuisine" :1});

//21
db.Restraurant.find({"cuisine" :{$nin :["Indian","Chinese"]}, "name" : {$regex : "..nal.."}},{"restaurant_id" : 1,"name":1,"district":1,"cuisine" :1});

//22
db.Restraurant.find({"ratings.date": ISODate("2014-08-11T00:00:00Z"), "ratings.rating":"A" , "ratings.score" : 6}, {"restaurant_id" : 1,"name":1,"ratings":1});

//23
db.Restraurant.find({ "ratings.2.date": ISODate("2014-08-11T00:00:00Z"), "ratings.2.rating":"A" , "ratings.2.score" : 8},{"restaurant_id" : 1,"name":1,"ratings":1});

//25
db.Restraurant.find().sort({"name" : 1})

//26
db.Restraurant.find().sort({"name" : -1})

//27
db.Restraurant.find().sort({"cuisine":1,"district" : -1});

//28
db.Restraurant.find({"address.street" :{ $exists : true } });

//31
db.Restraurant.find( {name : {$regex : "..nal.."}} ,{"district" : 1,"name" : 1,"cuisine" : 1 })

//32
db.Restraurant.find( {name : {$regex : "^McD"}} ,{"district" : 1,"name" : 1,"cuisine" : 1 })