// url.parse(url,boolean) boolean-->optional
// -->connects url into Object
//process.noepretion=true

url=require("url",process.noDeprecation=true)
var addr="https://localhost:8080/abc.html?Name=prof.khushbupatel&initial=pkp#mom"
var q=url.parse(addr,true)
// console.log(q)
console.log(q.query.Name)

