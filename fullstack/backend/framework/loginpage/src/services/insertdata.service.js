const {UserDetails}=require('../models')
function idata(name,email,password,phonenumber){
   
    const user1=new UserDetails({name:name,email:email,password:password,phoneNumber:phonenumber})
    user1.save()
}

module.exports=idata