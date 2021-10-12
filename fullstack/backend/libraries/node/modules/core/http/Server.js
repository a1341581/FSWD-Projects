const http=require('http')
var server=http.createServer((req,res)=>{
    res.write('<h1>hello</h1>')
})
server.listen(3006,()=>{
    console.log("server started on port 3006")
})