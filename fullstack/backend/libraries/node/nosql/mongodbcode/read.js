var mongo=require('mongodb').MongoClient
var url='mongodb://127.0.0.1:27017'
mongo.connect(url,(err,db)=>{
    if(err)throw err;
    console.log('db connected')
    var dba=db.db('hero')

    dba.collection('heroins').findOne({},(err,res)=>{
        if(err)throw err;
        console.log(res.name)
    db.close();
})
})