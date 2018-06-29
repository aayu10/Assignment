var http = require("http");
var server = http.createServer(function(request, response){
    console.log("Requset Starting");
    if(request.url=="/Hi"){
        response.write("Hi Client !!!");
        response.end();
    }
    if(request.url=="/Hello"){
        response.write("Hello Client !!!");
        response.end();
    }
    
})
server.listen(3000);
console.log("Server running at http://127.0.0.1:3000");