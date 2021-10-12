var http=require('http')
var server=http.createServer((req, res)=>{
    if (req.url=='/Citrus'){
        res.write('Oranges, Grapefruits, Mandarins and Limes')
        res.end()
    }
    if (req.url=='/Berries'){
        res.write('Strawberries, Raspberries, Blueberries, Kiwifruit and Passionfruit')
        res.end()
    }
    if (req.url=='/Melons'){
        res.write('Watermelons, Rockmelons and Honeydew melons')
        res.end()
    }
})
server.listen(3007,()=>{
    console.log("server got restarted on port 3007")
})