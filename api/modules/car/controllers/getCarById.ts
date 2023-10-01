import prisma from 'api/lib/db/prisma';
import { Request, Response } from 'express';

// This handler gets a car using its unique id in the database.

export default async function getCarById(req: Request, res: Response) {
  try {
    // Get id from the request params.
    const { id } = req.params;

    // Get car from the database.
    const car = await prisma.car.findUnique({
      where: {
        id,
      },
    });

    // If no car was found return an error.
    if (!car) {
      return res.status(400).json({ success: false });
    }

    // If a car was found return the car.
    return res.status(200).json({ success: true, data: car });
  } catch (error) {
    // Return an error if one occurs.
    return res.status(400).json({ success: false });
  }
}
