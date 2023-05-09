//SENTENCIAS SQL //
const queries = require('../models/queriesModel');
const { Pool } = require('pg');

const pool = new Pool({

    host: process.env.ELEPHANT_HOST,
    user: process.env.USER,
    database: process.env.DATABASE,
    password: process.env.ELEPHANT_PASSWORD

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

const getAppoById = async (id) => {

    let client,result;

    try {
        
        client = await pool.connect();
        result = await client.query(queries.appoByIdQuery, [id])

    } catch (error) {
        
        console.log('FAILED getting single appointment (Model)')
        throw error
    }

    finally {

        client.release();
    }
    return result;
}

const createAppo = async (data) => { //*operative

    let client, result;
    const {apponame,appodate,appotime,appotype,user_id,status_id,} = data
    console.log('esto es data', data)

    try {
        
        client = await pool.connect();
        result = await client.query(queries.createAppoQuery, [apponame,appodate,appotime,appotype,user_id,status_id])

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

    const {apponame,appodate,appotime,appotype,status_id} = body;

    try {
        
        client = await pool.connect();
        result = await client.query(queries.updateAppoQuery, [apponame,appodate,appotime,appotype,user_id,status_id])

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
        result = await client.query(queries.deleteAppoQuery, [id])

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
    deleteAppo,
    getAppoById
}