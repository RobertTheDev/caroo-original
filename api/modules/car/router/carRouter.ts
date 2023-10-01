import { Router } from 'express';

// The car router defines the API routes for handling car data.

// Create the car router usign the Express router.
const carRouter = Router();

// This routes gets all cars from the database.
carRouter.get('/cars', (_req, res) => {
  res.json('cars');
});

export default carRouter;
