import prisma from 'api/lib/db/prisma';
import { Request, Response } from 'express';

// This handler updates a car using its unique id in the database.

export default async function updateCarById(req: Request, res: Response) {
  try {
    // Get the request body and params.
    const { body, params } = req;

    // Get id from the request params.
    const { id } = params;

    // Update the car.
    const updatedCar = await prisma.car.update({
      data: body,
      where: {
        id,
      },
    });

    // If no car was updated return an error.
    if (!updatedCar) {
      return res.status(400).json({ success: false });
    }

    // If a car was updated then return the car.
    return res.status(200).json({ success: true, data: updatedCar });
  } catch (error) {
    // Return an error if one occurs.
    return res.status(400).json({ success: false });
  }
}
