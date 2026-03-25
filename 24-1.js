var http=require("http")
http.createServer(function(req,res){

    //syntax
    //res.writeHead(status,{"content-Type":mime})
    //mime type
    //text-->text/plain
    //html-->text/html
    //json-->application/json
    //jpg-->image/jpg
    //css-->text/css
    res.writeHead(200,{"content-Type":"text/html"})
    res.write("Hi!!!")
    res.write("<h1>Hello World</h1>")
    res.end()
}).listen(8080)
