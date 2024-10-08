const express = require('express')

const UserController = require('./controllers/UserController.js')
const AddressController = require('./controllers/AddressController.js')
const TechController = require('./controllers/TechController.js');
const ReportController = require('./controllers/ReportController.js');

const routes = express.Router();

routes.get('/users', UserController.index);
routes.post('/users', UserController.store);

routes.get('/users/:user_id/addresses',  AddressController.index);
routes.post('/users/:user_id/addresses',  AddressController.store);

routes.get('/users/:user_id/techs',  TechController.index);
routes.post('/users/:user_id/techs',  TechController.store);
routes.delete('/users/:user_id/techs',  TechController.delete);

routes.get('/report', ReportController.show);

module.exports = routes;