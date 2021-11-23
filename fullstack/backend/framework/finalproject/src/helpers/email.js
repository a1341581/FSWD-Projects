function sendmail(name,emailid){

    var nodemailer=require('nodemailer')

    var transporter=nodemailer.createTransport({
        service:'hotmail',
        auth:{
            user:'cathy_kcv@hotmail.com',
            pass:'Bestchewvin8$'
        }
    });
    
    var mailoption={
        from:'cathy_kcv@hotmail.com',
        to:emailid,
        subject:'You just login to our website',
        text:`Hi ${name} welcome to MY GOLF & COUNTRY CLUB!`
    };
    
    transporter.sendMail(mailoption,(err,info)=>{
        if(err){
            console.log(err)
        }else{
            console.log('mail send')
        }
    })
}

module.exports=sendmail;