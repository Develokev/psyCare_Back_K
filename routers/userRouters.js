const express = require('express');
const router = express.Router();

const { getAllUsersControl, getUserByIdControl, updateUserControl, createUserControl, deleteUserControl } = require('../controllers/userController');

//*ROUTES

//Get All Users - ADMIN
router.get('/', getAllUsersControl);

//Get user by ID
router.get('/:id', getUserByIdControl);

//Create user by ID
router.post('/', createUserControl);

//Update user by ID
router.put('/:id', updateUserControl);

//Delete user by ID
router.delete('/:id', deleteUserControl);

module.exports = router;