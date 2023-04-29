const express = require ('express');
const router = express.Router();

const {validateInputs} = require('../middlewares/inputValidator');
const { getAllAppointmentsControl, getOneAppointmentControl, createAppointmentControl, updateAppointmentControl, deleteAppointmentControl } = require('../controllers/apiAdminControllers');

//*Routers
//Get All Appointments ++++++++++
router.get('/', getAllAppointmentsControl)

//Get One Appointment by ID ++++++++++
router.get('/:id', getOneAppointmentControl)

//Create Appointment ++++++++++
router.post('/create', createAppointmentControl)

//Update Appointment ++++++++++
router.put('/:id', updateAppointmentControl)

//Delete Appointment ++++++++++
router.delete('/:id', deleteAppointmentControl)

module.exports = router;