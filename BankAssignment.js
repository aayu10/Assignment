//2
db.Bank.createIndex( { "accountNo": 1 }, { unique: true } )

//3
db.Bank.find({"customers.loanAmount" : {$gt : 0}},{"customers.customerName" : 1, "customers.city" :1})

//4
db.Bank.find({"customers.city" : "Chennai","customers.loanAmount": {$gt : 0}},{"customers.customerName" : 1})

//5
db.Bank.find({},{"branch.branchName" : 1, "branch.branchCity" : 1, "branch.assets" : 1}).sort({"branch.assets" : -1}).limit(1)

//6
db.Bank.find({"branch.branchCity" : "Pune", "customers.loanAmount" : {$gt : 0 }},{"customers.customerName" : 1, "customers.cities" : 1})

//7 
db.Bank.find({$and :[ {"balance":{$gt : 700 }},{"balance":{$lt : 900 }}]}).count()

//8
db.Bank.find({"branch.branchCity" : "Pune", "customers.depositAmount" : {$gt : 0 },"customers.loanAmount": {$gt : 0 }},
{ "customers.customerName" : 1})

//9
db.Bank.find({$expr:{$gt:["$customers.loanAmount","$balance"]}},{ "customers.customerName" : 1})

//10
db.Bank.find( {"customers.street" : {$regex : "Hill$"}} ,{"customers.customerName" : 1 })

//11
db.Bank.find({"customers.loanAmount" : 0, "customers.city" : "Pune"},{"customers.customerName" : 1})

//13
db.Bank.aggregate([{$group : {_id : "$branch.branchName",average : {$avg : "$balance"}}},{$sort :{"average" : -1}},{$limit : 1}])
      
//14
db.Bank.aggregate([{ $group: { _id: "$branch.branchName", count: { $sum: 1}}}])

//15
db.Bank.update({ "customers.customerName": "Ram" },{$inc: {balance : 20000}})