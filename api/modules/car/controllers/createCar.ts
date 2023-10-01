import prisma from 'api/lib/db/prisma';
import logger from 'api/lib/logger/winstonLogger';
import { Request, Response } from 'express';
import createCarSchema from 'models/car/validators/createCar.schema';

// This handler validates the request body and if successful creates a car in the database.

export default async function createCar(req: Request, res: Response) {
  try {
    // STEP 1: Validate the request body using the create car schema.
    const { body } = req;
    const validatedBody = await createCarSchema.safeParseAsync(body);

    // If validation is unsuccessful return an error.
    if (!validatedBody.success) {
      return res.status(400).json({
        success: false,
        message: validatedBody.error.errors[0].message,
      });
    }

    // STEP 2: If validation is successful create and return the created car.
    const createdCar = await prisma.car.create({
      data: validatedBody.data,
    });
    return res.status(201).json({ success: true, data: createdCar });
  } catch (error) {
    // If an error occurs then log the error and return an unsuccessful statement.
    const errorMessage = (error as Error).message;
    logger.error(
      `Error in route ${req.method} ${req.originalUrl}: ${errorMessage}`
    );
    return res.status(400).json({ success: false });
  }
}
