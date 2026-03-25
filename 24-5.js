var fs=require("fs")
var http=require("http")
http.createServer(function(req,res){
    if(req.url=="/"){
        res.write("Welcome to Home Page")
        res.end()
    }
    else if(req.url=="/about"){
        var a=fs.readFileSync("20-1.PNG")
        res.writeHead(200,{"content-Type":"image/jpg"})
        res.end(a)
    }
    else{
        res.write("Page not found")
        res.end()
    }
}).listen(8007)

