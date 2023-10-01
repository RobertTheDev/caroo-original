import prisma from 'api/lib/db/prisma';
import { Request, Response } from 'express';

// This handler deletes a car using its unique id in the database.

export default async function deleteCarById(req: Request, res: Response) {
  try {
    // Get id from the request params.
    const { id } = req.params;

    // Delete car from the db.
    const deletedCar = await prisma.car.delete({
      where: {
        id,
      },
    });

    // If no car was deleted return an error.
    if (!deletedCar) {
      return res.status(400).json({ success: false });
    }

    // If a car was found then return the car.
    return res.status(200).json({ success: true, data: {} });
  } catch (error) {
    // Return an error if one occurs.
    return res.status(400).json({ success: false });
  }
}
