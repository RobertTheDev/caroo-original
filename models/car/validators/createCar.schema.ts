import { number, object, string, z } from 'zod';
import carColourValues from '../values/carColourValues';

// Zod validation schema defines fields required for creating a car.
const createCarSchema = object({
  colour: string({
    required_error:
      'A car colour is required. Please provide a colour for the car you are selling.',
    invalid_type_error: 'Car colour must be a string.',
  })
    .nonempty('Car colour cannot be empty.')
    .refine((value) => carColourValues.includes(value), {
      message: `Car colour must be one of ${carColourValues}.`,
    }),
  make: string({
    required_error:
      'A car make is required. Please provide a car make for the car you are selling.',
    invalid_type_error: 'Car make must be a string.',
  }).nonempty('Car make cannot be empty.'),
  model: string({
    required_error:
      'A car model is required. Please provide a car model for the car you are selling.',
    invalid_type_error: 'Car model must be a string.',
  }).nonempty('Car model cannot be empty.'),
  year: number({
    required_error:
      'A car year is required. Please provide a year for the car you are selling.',
    invalid_type_error: 'Car year must be a number.',
  }).refine((value) => value >= 2000 && value <= new Date().getFullYear(), {
    message: `Year must be a valid year between 2000 and ${new Date().getFullYear()}.`,
  }),
});

// Create a TypeScript type from the schema.
export type CreateCarSchemaType = z.infer<typeof createCarSchema>;

export default createCarSchema;
