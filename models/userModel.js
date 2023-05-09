//SENTENCIAS SQL //
const queries = require('../models/queriesModel');
const { Pool } = require('pg');

const pool = new Pool({

    host: process.env.ELEPHANT_HOST,
    user: process.env.USER,
    database: process.env.DATABASE,
    password: process.env.ELEPHANT_PASSWORD

})

const getAllUsers = async () => { //*operative
    
    let client, result;

    try {
        
        client= await pool.connect();
        result = await client.query(queries.allUsersQuery)

    } catch (error) {
        
        console.log('FAILED getting all users for admin')
        throw error

    }

    finally {

        client.release();

    }
    
    return result
}

const getUserById = async (id) => { //*operative

    let client,result;

    try {
        
        client = await pool.connect();
        result = await client.query(queries.oneUserByIdQuery,[id]);

    } catch (error) {
        
        console.log('FAILED getting user by email (Model)')
    }

    finally {

        client.release();
    }

    return result
}

const createUser = async (dataRole) => { //*operative

    let client, result;
    const {role_id,name,last_name,email,password,avatar} = dataRole

    try {
        
        client = await pool.connect();
        result = await client.query(queries.createUserQuery, [role_id,name,last_name,email,password,avatar])

    } catch (error) {
        
        console.log('FAILED creating new user (Model), please, contact administrator')
    }

    finally {

        client.release();
    }
    return result
}

const updateUserById = async (body, id) => { //*operative

    let client, result;
    const {name,last_name,email,password,avatar} = body;

    try {
        
        client = await pool.connect();
        result = await client.query(queries.updateUserQuery, [name,last_name,email,password,avatar,id])

    } catch (error) {
        
        console.log('Updating Model Failed')
    }

    finally {

        client.release();
    }
    
    return result;
}

const deleteUser = async (id) => { //*operative

    let client, result;
    
    try {
        
        client = await pool.connect();
        result = await client.query(queries.deleteUserQuery, [id])

    } catch (error) {
        
        console.log('Delete Model Failed')
    }

    finally {

        client.release();
    }
    return result;
}

const loginModel = async (email) => {

    let client, result;

    try {
        
        client = await pool.connect();
        const {rows} = await client.query(queries.oneUserByEmailQuery, [email])
        result = rows

    } catch (error) {
        
        console.log('Login Failed (Model)')
    }

    finally {

        client.release();
    }
    return result;
}

module.exports = {

    getAllUsers,
    getUserById,
    createUser,
    updateUserById,
    deleteUser,
    loginModel
}