const jwt = require('jsonwebtoken')

const verifytoken  = (req , res , next)=>{
    const token = req.header('Authorization')

   try {
    if (!token){
        return res.send({Message: "Token is missing"})
    }

    const decode = jwt.verify(token , process.env.JWT_KEY)

    req.userId = decode.id;

     next()
   } catch (error) {
    console.log(error)
   }
    
}

module .exports = verifytoken;