var http = require("http");
var fs = require("fs");
var path = require("path");

http.createServer(function(req, res){
    console.log(`$(req.method) request for $(req.url)`);

    if(req.url.match('style.css')){
        var cssPath = path.join(__dirname, req.url);
        var fileStream = fs.createReadStream(cssPath);
        fileStream.pipe(res);
    }
    else if (req.url.match("image.jpg")){
        var imgPath = path.join(__dirname, req.url);
        var imgStream = fs.createReadStream(imgPath);
        imgStream.pipe(res);
    }
    else {
        res.end("404 File Not Found");
    }
}).listen(3000);
console.log("File Server running at port 3000");