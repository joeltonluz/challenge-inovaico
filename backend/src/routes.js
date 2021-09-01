const express = require('express');

const PatientsController = require('./controllers/PatientsController');
const SchedulesController = require('./controllers/SchedulesController');

const routes = express.Router();

const listPatients = [];

routes.get('/',(req, res) => {
  return res.send('Página Inicial');
});

//Patients
routes.get('/patients',PatientsController.index);
routes.get('/patients/create',PatientsController.create);
routes.get('/patients/:id', PatientsController.show);
routes.get('/patients/:id/edit', PatientsController.edit);
routes.post('/patients',PatientsController.post);
routes.put('/patients',PatientsController.put);
routes.delete('/patients',PatientsController.delete);

//Schedules
routes.get('/schedules',SchedulesController.index);
routes.get('/schedules/create',SchedulesController.create);
routes.get('/schedules/:id', SchedulesController.show);
// routes.get('/schedules/:id/edit', SchedulesController.edit);
routes.post('/schedules',SchedulesController.post);
routes.put('/schedules',SchedulesController.put);
// routes.delete('/schedules',SchedulesController.delete);


routes.use((req, res) => {
  res.status(404).send('Rota não encontrada :(');
});

module.exports = routes;