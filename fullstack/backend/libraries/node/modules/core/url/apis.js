var http=require('http')
var server=http.createServer((req, res)=>{
    if (req.url=='/home'){
        res.write('hello')
        res.end()
    }
    if (req.url=='/about'){
        res.write('im about')
        res.end()
    }
    if (req.url=='/contact'){
        res.write('im contact')
        res.end()
    }
})
server.listen(3007,()=>{
    console.log("server got restarted on port 3007")
})