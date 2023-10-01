import prisma from 'api/lib/db/prisma';
import { Request, Response } from 'express';

// This handler creates a car in the database.

export default async function createCar(req: Request, res: Response) {
  try {
    // Get the body from the request.
    const { body } = req;

    // Create a car in the database.
    const car = await prisma.car.create({
      data: body,
    });

    // Return the car.
    res.status(200).json({ success: true, data: car });
  } catch (error) {
    // Return an error if one occurs.
    res.status(400).json({ success: false });
  }
}
