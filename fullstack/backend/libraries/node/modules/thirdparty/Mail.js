var nodemailer=require('nodemailer')
var transporter=nodemailer.createTransport({
    service:'hotmail',
    auth:{
    user:'cathy_kcv@hotmail.com',
    pass:'Bestchewvin8$'
}
})
var mailoption={
    from:'cathy_kcv@hotmail.com',
    to:'waseemahmed116@gmail.com, chewvin@gmail.com',
    subject:'hi mr waseem test mail from chewvin',
    text:'hi what do you like for your dinner'
};
transporter.sendMail(mailoption,(err,info)=>{
    if(err){
        console.log(err)
    }else{
        console.log('mail send')
    }
})