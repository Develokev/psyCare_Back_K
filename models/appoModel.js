//SENTENCIAS SQL //
const queries = require('../models/queriesModel');
const { Pool } = require('pg');

const pool = new Pool({

    host: 'localhost',
    user: 'postgres',
    database: 'psyCare',
    password: "admin"

})

const getAllAppointments = async (req,res) => { //*operative

    let client, result;

    try {
        
        client = await pool.connect();
        result = await client.query(queries.allAppoQuery)

    } catch (error) {
        
        console.log('FAILED getting all appointments (Model)')
        throw error
    }

    finally {

        client.release();
    }
    return result;
}

const getApposById = async (id) => { //*operative

    let client, result;

    try {
       
        client = await pool.connect();
        result = await client.query(queries.apposByIdQuery,[id])

    } catch (error) {
        
        console.log('FAILED getting appointment by ID (Model)')
        throw error
    }

    finally {

        client.release();
    }

    return result;
}

const createAppo = async (data) => { //*operative

    let client, result;
    const {status_id,appoName,appoDate,appoTime,appoType,user_id} = data

    try {
        
        client = await pool.connect();
        result = await client.query(queries.createAppoQuery, [appoName,appoDate,appoTime,appoType,user_id,status_id])
    } catch (error) {
        
        console.log('FAILED creating new appointment (Model)')
    }

    finally {

        client.release();
    }

    return result;
}

const updateAppo = async (body, id) => {

    let client, result;
    const {appoDate,appoTime} = body;

    try {
        
        client = await pool.connect();
        result = await client.query(queries.updateAppoQuery, [appoDate,appoTime,id])

    } catch (error) {
        
        console.log('Updating appointment Model FAILED')
    }

    finally {

        client.release();
    }
    return result;
}

const deleteAppo = async (id) => {

    let client, result;

    try {
        
        client = await pool.connect();
        result = await client.query(queries.deleteUserQuery, [id])

    } catch (error) {
        
        console.log('Deleting appointment FAILED (Model)')
    }

    finally {

        client.release();
    }

    return result;
}


module.exports = {

    getAllAppointments,
    getApposById,
    createAppo,
    updateAppo,
    deleteAppo
}