const express = require('express');
const { login } = require('../controllers/login');
const { userRegistration } = require('../controllers/users');
const validateRequest = require('../middlewares/validateRequest');
const userSchema = require('../validations/userSchema');
const loginSchema = require('../validations/loginSchema');

const routes = express();

routes.post('/usuario', validateRequest(userSchema), userRegistration);
routes.post('/login', validateRequest(loginSchema), login);

module.exports = routes;