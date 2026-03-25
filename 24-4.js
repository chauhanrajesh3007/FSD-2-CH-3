a={name:"abc",age:19}
var http=require("http")
http.createServer(function(req,res){
    if(req.url=="/"){
        res.write("Welcome to Home Page")
        res.end()
    }
    else if(req.url=="/about"){
        res.writeHead(200,{"content-Type":"application/json"})
        res.end(JSON.stringify(a))
    }
    else{
        res.write("Page not found")
        res.end()
    }
}).listen(8030)