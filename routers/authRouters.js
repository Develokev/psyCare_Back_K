const express = require("express");
const router = express.Router();

const {validateInputs} = require('../middlewares/inputValidator')
const {validateJWT} = require('../middlewares/validateJWT');
const { loginControl } = require("../controllers/authControllers");

//Login Route
router.post('/login', [validateInputs], loginControl)

//Renew Token
router.get('/renew', validateJWT, )


module.exports = router;