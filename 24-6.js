/*write node js script to perform task as ask
1.create one page with 2 hyperlink about and detail by clicking particular link it should open that page
2.by requsting about page display welcome to about page in blue color when request details page display a json having 2 key value pair
3.if user request any other then display page not found in red color*/
var fs=require("fs")
var http=require("http")
http.createServer(function(req,res){
    if(req.url=="/"){
        res.writeHead(200,{"content-Type":"text/html"})
        res.write('<a href="/about">about</a><br>')
        res.write('<a href="/details">details</a>')
        res.end()
    }
    else if(req.url=="/about"){
        res.writeHead(200,{"content-Type":"text/html"})
        res.write('<h1 style="color:blue">Welcome to about page</h1>')
        res.end()
    }
    else if(req.url=="/details"){
        res.writeHead(200,{"content-Type":"application/json"})
        var a={name:"abc",age:19}
        res.end(JSON.stringify(a))
    }
    else{
        res.writeHead(404,{"content-Type":"text/html"})
        res.write('<h1 style="color:red">Page not found</h1>')
        res.end()
    }
}).listen(8012)
