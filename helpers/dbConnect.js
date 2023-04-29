const mongoose = require('mongoose');

const dbConnection = async () => {

    try {
        
        const response = await mongoose.connect(process.env.URI_CONNECT)
        console.log('Back-end connected to psyCare Database')
        return response

    } catch (error) {
        
        return {

            ok: false,
            msg: 'Fail trying to connect to PsyCare Database',
            error,

        }
}
}

module.exports= {
    dbConnection
 }