const mongoose = require('mongoose');


const dbConnection = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_ATLAS, {
            // Option is default in this version 6.x mongoose
            // useNewUrlParser: true,
            // useUnifiedTopology: true,
            // useCreateIndex: true,
            // useFindAndModify: false
        });

        console.log('Connected to BD')
        
    } catch (error) {
        console.log(error);
        throw new Error('Connection DB was not success');
    }
}


module.exports = {
    dbConnection
}