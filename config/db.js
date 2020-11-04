const mongoose = require('mongoose')

const connectDatabase = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true
        })

        console.log(`Mongo connected on: ${conn.connection.host}`)

    } catch (err) {
        console.error(err)
        process.exit(1)
    }


    
}


module.exports = connectDatabase