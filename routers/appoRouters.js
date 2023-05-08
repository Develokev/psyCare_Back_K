const express = require ('express');
const router = express.Router();

const {validateInputs} = require('../middlewares/inputValidator');
const {getAllAppointmentsControl,getOneAppointmentControl,createAppointmentControl, updateAppointmentControl,deleteAppointmentControl, getAppointmentByIdControl} = require('../controllers/appoControllers');

//*Routers
//Get All Appointments ++++++++++
router.get('/', getAllAppointmentsControl)

//Get Appointments under USER ID ++++++++++
router.get('/:id', getOneAppointmentControl)

//Get Appointment by Appo ID
router.get('/by-id/:id', getAppointmentByIdControl)

//Create Appointment ++++++++++
router.post('/create', createAppointmentControl);

//Update Appointment ++++++++++
router.put('/:id', updateAppointmentControl)

//Delete Appointment ++++++++++
router.delete('/:id', deleteAppointmentControl)

module.exports = router;