const { getAllAppointments, getApposById, createAppo, updateAppo, deleteAppo, getAppoById } = require('../models/appoModel');

//*APPOINTMENTS CONTROLLERS

//Get All Appointments ++++++++++
const getAllAppointmentsControl = async (req,res) => {

    let data;

    try {
        
        data = await getAllAppointments();

        if(data) {

            return res.status(200).json({

                ok:true,
                msg: 'Appointments gotten correctly',
                data
            })
        }

    } catch (error) {
        
        return res.status(500).json({

            ok:false,
            msg: 'FAILED getting all appointments (Controller), please, contact administrator'
        })
    }
}

//Get Appointments by USER ID ++++++++++
const getOneAppointmentControl = async (req,res) =>{

    let data, id;
    id = req.params.id;
    
    try {

            data = await getApposById(id)

            return res.status(200).json({

                ok:true,
                msg: 'Successfully retrieving appointments under USER ID',
                data
            })

    } catch (error) {
        
        return res.status(500).json({

            ok:false,
            msg: 'FAILED retrieving appointment by ID (Controller), please, contact administrator'
        })
    }
}

//Get Apointment by Appo ID ++++++++++
const getAppointmentByIdControl = async (req,res) => {

    let data, id;
    id = req.params.id;
    
    try {

            data = await getAppoById(id)

            return res.status(200).json({

                ok:true,
                msg: 'Successfully retrieving appointment by ID',
                data
            })

    } catch (error) {
        
        return res.status(500).json({

            ok:false,
            msg: 'FAILED retrieving appointment by ID (Controller), please, contact administrator'
        })
    }
}

//Create Appointment ++++++++++
const createAppointmentControl = async (req,res) =>{

    let data;

    data = {

        status_id:1,
        ...req.body
    }

    try {
        
        if(data) {

            data= await createAppo(data)

            return res.status(200).json({

                ok:true,
                msg: 'Appointment enlisted correctly, please await confirmation from Psychologist',
                data
            })
        }

    } catch (error) {
        
        return res.status(500).json({

            ok:false,
            msg: 'FAILED creating appointment, please, contact administrator'
        })   
    }
}

//Update Appointment ++++++++++
const updateAppointmentControl = async (req,res) =>{

    let data, id;
    id = req.params.id;

    try {
        
        if(id) {

            data = await updateAppo(req.body, id)

            return res.status(200).json({

                ok:true,
                msg: 'Appointment updated correctly',
                data
            })
        }

    } catch (error) {
        
        return res.status(500).json({

            ok:false,
            msg: 'FAILED updating appointment (Controller), please, contact administrator.'
        })
    }
}

//Delete Appointment ++++++++++
const deleteAppointmentControl = async (req,res) => {

    let data, id;
    id = req.params.id

    try {

        if(id) {

            data = await deleteAppo(id)

            return res.status(200).json({

                ok:true,
                msg: 'Appointment deleted successfully.',
                data
            })
        }

    } catch (error) {

        return res.status(500).json({

            ok:true,
            msg: 'FAILED deleting appointment (Controller), please, contact administrator.'
        })
    }
}

module.exports = {

    getAllAppointmentsControl,
    getOneAppointmentControl,
    createAppointmentControl,
    updateAppointmentControl,
    deleteAppointmentControl,
    getAppointmentByIdControl
}