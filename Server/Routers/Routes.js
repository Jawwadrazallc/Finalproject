const express = require('express')
const { Registeruser, Login, Testingjwt } = require('../Controllers/authControllers')
// const verifytoken = require('../Middlewares/verifytoken')
const { Users } = require('../Controllers/userController')


const router = express.Router()

router.post('/register' , Registeruser) 
router.post('/login' , Login) 
router.get('/users' , Users)
// router.post('/testing' , verifytoken , Testingjwt) 





module.exports = router