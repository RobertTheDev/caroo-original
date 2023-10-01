// Interface defines the fields for a car.

export default interface ICar {
  id: string;
  createdAt: Date;
  updatedAt: Date | null;
  colour: string;
  make: string;
  model: string;
  year: number;
}
