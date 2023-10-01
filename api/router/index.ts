import carRouter from 'api/modules/car/router/carRouter';
import { Router } from 'express';

// The app router uses and exports all the individual routers used in the app.

// Create the app router using the express router/
const appRouter = Router();

// Use and import the car router.
appRouter.use('/', carRouter);

export default appRouter;
