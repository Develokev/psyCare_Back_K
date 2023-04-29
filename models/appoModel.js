//SENTENCIAS SQL //
const appoQueries = require('../models/queriesModel');
const { Pool } = require('pg');

const pool = new Pool({

    host: 'localhost',
    user: 'postgres',
    database: 'psyCare',
    password: "admin"

})

// const getAllAppointments = async (req,res) {

//     let client, result;

//     try {
        
//         // client = await pool.connect();
//         // result = await query(appoQueries.)

//     } catch (error) {
        


//     }

// }