import prisma from 'api/lib/db/prisma';
import logger from 'api/lib/logger/winstonLogger';
import { Request, Response } from 'express';

// This handler gets all cars from the database.

export default async function getCars(req: Request, res: Response) {
  try {
    // Find and return all the cars in the db.
    const cars = await prisma.car.findMany();

    return res.status(200).json({ success: true, data: cars });
  } catch (error) {
    // If an error occurs then log the error and return an unsuccessful statement.
    const errorMessage = (error as Error).message;
    logger.error(
      `Error in route ${req.method} ${req.originalUrl}: ${errorMessage}`
    );
    return res.status(400).json({ success: false });
  }
}
