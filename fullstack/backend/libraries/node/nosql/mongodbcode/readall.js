var mongo=require('mongodb').MongoClient
var url='mongodb://127.0.0.1:27017'
mongo.connect(url,(err,db)=>{
    if(err)throw err;
    console.log('db connected')
    var dba=db.db('hero')
    var quiry={comics:'marvel'}
    dba.collection('heroins').find(quiry).toArray((err,result)=>{
        if(err)throw err;
        console.log(result)
    db.close();
})
})