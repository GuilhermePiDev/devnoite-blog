const express = require("express")
const router = express.Router();

const loginController = require("../controllers/loginController")
const { validateEmail, validateTitle } = require("../services/validator");


module.exports = router