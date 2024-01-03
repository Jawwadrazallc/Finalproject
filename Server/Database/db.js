const mongoose  = require( 'mongoose')


const databasecoonection = async()=>{
    try {
        await mongoose.connect(process.env.Mongo_URI)
        console.log(`database connected`)
    } catch (error) {
        console.log(error)
    }
}

module.exports = databasecoonection