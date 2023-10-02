import prisma from 'api/lib/db/prisma';
import logger from 'api/lib/logger/winstonLogger';
import { Request, Response } from 'express';

// This handler deletes a car using its unique id in the database.

export default async function deleteCarById(req: Request, res: Response) {
  try {
    // STEP 1: Delete car from the db using the id from request params.
    const { id } = req.params;

    const deletedCar = await prisma.car.delete({
      where: {
        id,
      },
    });

    // STEP 2: Return a success or error message depending on the outcome of the result.
    if (!deletedCar) {
      return res.status(400).json({ success: false });
    }

    return res.status(200).json({ success: true, data: {} });
  } catch (error) {
    // If an error occurs then log the error and return an unsuccessful statement.
    const errorMessage = (error as Error).message;
    logger.error(
      `Error in route ${req.method} ${req.originalUrl}: ${errorMessage}`
    );
    return res.status(400).json({ success: false });
  }
}
