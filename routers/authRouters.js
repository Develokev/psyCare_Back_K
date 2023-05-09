const express = require("express");
const router = express.Router();

const {validateInputs} = require('../middlewares/inputValidator')
const {validateJWT} = require('../middlewares/validateJWT');
const { loginControl, getUserByEmailControl } = require("../controllers/authControllers");

//Login Route
router.post('/login', [validateInputs], loginControl)

//Get one user by Email
router.get('/:email', getUserByEmailControl)

//Renew Token
router.get('/renew', validateJWT, )


module.exports = router;