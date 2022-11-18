const express = require('express');
const { userRegistration } = require('../controllers/users');
const validateRequest = require('../middlewares/validateRequest');
const userSchema = require('../validations/userSchema');

const routes = express();

routes.post('/usuario', validateRequest(userSchema), userRegistration);

module.exports = routes;