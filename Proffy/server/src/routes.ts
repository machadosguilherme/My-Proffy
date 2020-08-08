import express from 'express';
import ClassController from './controllers/ClassesController';
import ConnectionsController from './controllers/connectionsController';


const routes = express.Router();
const classesControllers = new ClassController();
const connectionsController = new ConnectionsController();

routes.get('/classes', classesControllers.index);
routes.post('/classes', classesControllers.create);

routes.post('/connections', connectionsController.create);
routes.get('/connections', connectionsController.index);




export default routes;