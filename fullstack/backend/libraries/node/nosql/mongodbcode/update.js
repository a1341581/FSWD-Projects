var mongo=require('mongodb').MongoClient
var url='mongodb://127.0.0.1:27017'
mongo.connect(url,(err,db)=>{
    if(err)throw err;
    console.log('db connected')
    var dba=db.db('hero')
    var idtofind={name:'superman1'}
    var newvalue={$set:{comics:'dc'}}
    dba.collection('heroins').updateOne(idtofind, newvalue, (err,res)=>{
        if(err)throw err;
        console.log('updated')
    db.close();
})
})