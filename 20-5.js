// write node js script to calculate avg of numbers pass in query parameter of this url.
var url=require("url")
var addr="http://localhost:8080/default.html?m1=30&m2=40&m3=60"
var q=url.parse(addr,true) 
a=parseInt(q.query.m1)
b=parseInt(q.query.m2)
c=parseInt(q.query.m3)
avg=(a+b+c)/3
console.log("average is:"+avg)
process.noDeprecation=true