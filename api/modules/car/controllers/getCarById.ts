import prisma from 'api/lib/db/prisma';
import logger from 'api/lib/logger/winstonLogger';
import { Request, Response } from 'express';

// This handler gets a car using its unique id in the database.

export default async function getCarById(req: Request, res: Response) {
  try {
    // STEP 1: Get car from the database using id from the request params.
    const { id } = req.params;

    const car = await prisma.car.findUnique({
      where: {
        id,
      },
    });

    // STEP 2: Return the found car or an error if not found.
    if (!car) {
      return res.status(400).json({ success: false });
    }

    return res.status(200).json({ success: true, data: car });
  } catch (error) {
    // If an error occurs then log the error and return an unsuccessful statement.
    const errorMessage = (error as Error).message;
    logger.error(
      `Error in route ${req.method} ${req.originalUrl}: ${errorMessage}`
    );
    return res.status(400).json({ success: false });
  }
}
