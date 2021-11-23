var sendmail=require('../helpers/email')

function serviceEmail(name,emailid){
    sendmail(name,emailid)
}

module.exports=serviceEmail