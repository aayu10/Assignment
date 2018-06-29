var jsonserver = require("./JsonServerBL")
var http = require("http");
var data = require("./Example");
http.createServer(function(req, res){
    if(req.url === "/"){
        res.end(JSON.stringify(data));
    }
    else if(req.url==="/instock"){
        jsonserver.listInStock(res);
    }
    else if(req.url==="/onorder"){
        jsonserver.listOnBackOrder(res);
    }
    else{
        res.end("404 Error");
    }
}).listen(3000)

console.log("Server Listening on Port 3000");

