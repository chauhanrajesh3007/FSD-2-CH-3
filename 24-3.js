//create a server of a webpage having two pages home and about when user open home page display welcome to home page.when user open about page display welcpme to about page 
//if user open any other page display page not found.
var http=require("http")
http.createServer(function(req,res){
    if(req.url=="/"){
        res.write("Welcome to Home Page")
        res.end()
    }
    else if(req.url=="/about"){
        res.write("Welcome to about Page")
        res.end()
    }
    else{
        res.write("Page not found")
        res.end()
    }
}).listen(8084)

