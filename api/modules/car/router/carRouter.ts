import { Router } from 'express';
import getCarById from '../controllers/getCarById';
import getCars from '../controllers/getCars';
import deleteCarById from '../controllers/deleteCarById';
import createCar from '../controllers/createCar';
import updateCarById from '../controllers/updateCarById';

// The car router defines the API routes for handling car data.

// Create the car router usign the Express router.
const carRouter = Router();

// This routes deletes a car by its unique id in the database.
carRouter.delete('/cars/:id', deleteCarById);

// This route gets all cars from the database.
carRouter.get('/cars', getCars);

// This route gets a car by its unique id from the database.
carRouter.get('/cars/:id', getCarById);

// This route creates a car in the database.
carRouter.post('/create-car', createCar);

// This route updates a car by its unique id in the database.
carRouter.put('/update-car/:id', updateCarById);

export default carRouter;
