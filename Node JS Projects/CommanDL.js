var rect = require("./RectangleJsonBL")
var temp = require("./TempratureBL")
var http = require("http");
var rectangle = new rect.Rectangle(10,20);
var temperature = new temp.Temprature(212);
http.createServer(function(req, res){
    if(req.url == "/rectangle/area"){
        var area = rectangle.calculateArea();
        res.end("Area = " + area.toString());
    }
    else if(req.url == "/rectangle/perimeter"){
        var perimeter = rectangle.calculatePerimeter();
        res.end("Perimeter = " + perimeter.toString());
    }
    else if(req.url == "/temprature/celcius"){
        var celcius = temperature.convertToCelcius();
        res.end("Celcius = " + celcius.toString());
    }
    else if(req.url == "/temprature/farenheit"){
        var farenheit = temperature.convertToFarenheit();
        res.end("Farenheit = " + farenheit.toString());
    }
    else{
        res.end("404 Error");
    }
}).listen(3000)

console.log("Server Listening on Port 3000");