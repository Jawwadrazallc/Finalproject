const usersschema = require('../Models/userschema')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')


const Registeruser = async(req ,res)=> {
     const {name , email , password , role} = req.body

     if (!name || !email || !password){
        return res.send({Message : "All fields are required"})
     }

     const checkemail = await usersschema.findOne({email})

     if (checkemail){
        return res.send({Message: "Email already Exist"})
     }

     const hashed = await bcrypt.hash(password , 10)

     const newuser = await new usersschema({name , role , email , password:hashed}).save()

     if (newuser){
        return res.send({Message : "User Save Successfully"})
     }else{
        return res.send({Message : "User Save Failed"})
     }

     
}

const Login = async(req , res)=> {
    const {email , password} = req.body

    const checkuser = await usersschema.findOne({email})
    
    if (!checkuser){
        return res.send({Message: "user no found"})
    }

    const comparepassword = await bcrypt.compare(password , checkuser.password)
     
    const token = jwt.sign({id:checkuser._id } , process.env.JWT_KEY  , {expiresIn:"1m"})
    if (comparepassword){
        return res.send({Message : "Login Successfull" , token ,role:checkuser.role , name:checkuser.name})
    }else{
        return res.send({Message : "Login failed"})
    }

}


const Testingjwt = (req , res) => {
   res.send({Message : "Route Accesssed"})
}

module.exports = {Registeruser , Login , Testingjwt}