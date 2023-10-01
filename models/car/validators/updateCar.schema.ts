import { number, object, string, z } from 'zod';
import carColourValues from '../values/carColourValues';

// Zod validation schema defines fields required for updating a car.
const updateCarSchema = object({
  colour: string({
    invalid_type_error: 'Car colour must be a string.',
  })
    .nonempty('Car colour cannot be empty.')
    .refine((value) => carColourValues.includes(value), {
      message: `Car colour must be one of ${carColourValues}.`,
    })
    .optional(),
  make: string({
    invalid_type_error: 'Car make must be a string.',
  })
    .nonempty('Car make cannot be empty.')
    .optional(),
  model: string({
    invalid_type_error: 'Car model must be a string.',
  })
    .nonempty('Car model cannot be empty.')
    .optional(),
  year: number({
    invalid_type_error: 'Car year must be a number.',
  })
    .refine((value) => value >= 2000 && value <= new Date().getFullYear(), {
      message: `Year must be a valid year between 2000 and ${new Date().getFullYear()}.`,
    })
    .optional(),
});

// Create a TypeScript type from the schema.
export type UpdateCarSchemaType = z.infer<typeof updateCarSchema>;

export default updateCarSchema;
