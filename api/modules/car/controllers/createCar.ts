import prisma from 'api/lib/db/prisma';
import { Request, Response } from 'express';
import createCarSchema from 'models/car/validators/createCar.schema';

// This handler creates a car in the database.

export default async function createCar(req: Request, res: Response) {
  try {
    // Get the body from the request.
    const { body } = req;

    //  Validate the body using the create car schema.
    const validation = await createCarSchema.safeParseAsync(body);

    // If validation is unsuccessful return an error.
    if (!validation.success) {
      return res.status(400).json({
        success: false,
        message: validation.error.errors[0].message,
      });
    }

    // Create a car in the database.
    const car = await prisma.car.create({
      data: validation.data,
    });

    // Return the car.
    return res.status(200).json({ success: true, data: car });
  } catch (error) {
    // Return an error if one occurs.
    return res.status(400).json({ success: false });
  }
}
