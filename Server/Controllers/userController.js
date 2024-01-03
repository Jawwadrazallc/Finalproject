const userschema = require('../Models/userschema')

const Users = async(req , res)=> {
    const allusers = await userschema.find()

    if (allusers.length > 0){
        return res.send(allusers)
    }else{
        return res.send({Message  : "No user Found"})
    }
}


module.exports = {Users}