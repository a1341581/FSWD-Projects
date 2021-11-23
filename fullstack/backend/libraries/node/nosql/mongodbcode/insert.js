var mongo=require('mongodb').MongoClient
var url='mongodb://127.0.0.1:27017'
mongo.connect(url,(err,db)=>{
    if(err)throw err;
    console.log('db connected')
    var dba=db.db('hero')
    var obj={name:'ironman', heroins:'miss.marvel', comics:'marvel'}
    dba.collection('heroins').insertOne(obj,(err,res)=>{
        if(err)throw err;
        console.log('one object got inserted')
    db.close();
})
})