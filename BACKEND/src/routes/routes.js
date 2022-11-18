const express = require('express');
const { login } = require('../controllers/login');
const { userRegistration } = require('../controllers/users');
const validateRequest = require('../middlewares/validateRequest');
const userSchema = require('../validations/userSchema');
const loginSchema = require('../validations/loginSchema');
const { authenticationFilter } = require('../middlewares/authentication');
const { registerCar, listCars, updateCar } = require('../controllers/cars');
const carSchema = require('../validations/carSchema');

const routes = express();

routes.post('/usuario', validateRequest(userSchema), userRegistration);
routes.post('/login', validateRequest(loginSchema), login);

routes.use(authenticationFilter);

routes.post('/carros', validateRequest(carSchema), registerCar);
routes.get('/carros', listCars);
routes.put('/carros/:id', validateRequest(carSchema), updateCar);

module.exports = routes;