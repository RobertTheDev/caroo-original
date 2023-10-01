import prisma from 'api/lib/db/prisma';
import { Request, Response } from 'express';

// This handler gets all cars from the database.

export default async function getCars(_req: Request, res: Response) {
  try {
    // Get all the found cars
    const cars = await prisma.car.findMany();

    // Return all the found cars.
    res.status(200).json({ success: true, data: cars });
  } catch (error) {
    // Return an error if one occurs.
    res.status(400).json({ success: false });
  }
}
