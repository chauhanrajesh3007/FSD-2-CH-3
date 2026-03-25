url=require("url",process.noDeprecation=true)
var addr="https://localhost:8080/abc.txt?year=2025&month=feb"
var q=url.parse(addr)
if( (q.query.year%4==0 && q.query.year%100!=0) || (q.query.year%400==0))
{
    console.log("year is leap year")
}
else
{
    console.log("year is not leap year")
}
var fs=require("fs")
fs.writeFile("R1.txt",q.query,(err)=>{
    if (err) throw err 
    console.log("writing file successfully")})

    