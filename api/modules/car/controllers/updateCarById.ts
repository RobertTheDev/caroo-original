import prisma from 'api/lib/db/prisma';
import logger from 'api/lib/logger/winstonLogger';
import { Request, Response } from 'express';
import updateCarSchema from 'models/car/validators/updateCar.schema';

// This handler updates a car using its unique id in the database.

export default async function updateCarById(req: Request, res: Response) {
  try {
    // STEP 1: Validate the request body with the update car schema.
    const { body } = req;
    const validation = await updateCarSchema.safeParseAsync(body);

    if (!validation.success) {
      return res.status(400).json({
        success: false,
        message: validation.error.errors[0].message,
      });
    }

    // STEP 2: Update the car with its unique id using id from the request params.
    const { id } = req.params;

    const updatedCar = await prisma.car.update({
      data: body,
      where: {
        id,
      },
    });

    // STEP 3: Return the updated car if found otherwise return an error.
    if (!updatedCar) {
      return res.status(400).json({ success: false });
    }

    return res.status(200).json({ success: true, data: updatedCar });
  } catch (error) {
    // If an error occurs then log the error and return an unsuccessful statement.
    const errorMessage = (error as Error).message;
    logger.error(
      `Error in route ${req.method} ${req.originalUrl}: ${errorMessage}`
    );
    return res.status(400).json({ success: false });
  }
}
