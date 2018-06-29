var data = require("./Example");
function listInStock(res){
    var instock = data.filter(function(item){
        return item.avail === "In Stock";
    })
    res.end(JSON.stringify(instock))
}

function listOnBackOrder(res){
    var onorder = data.filter(function(item){
        return item.avail === "On Back Order";
    })
    res.end(JSON.stringify(onorder))
}

module.exports.listInStock = listInStock;
module.exports.listOnBackOrder = listOnBackOrder;