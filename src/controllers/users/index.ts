import { NextFunction, Request, Response } from 'express';

export function getAllUsers(req: Request, res: Response, next: NextFunction) {
  return res.status(200).json([
    {
      name: 'Paulo',
      age: 28,
    },
    {
      name: 'Roberto',
      age: 34,
    },
    {
      name: 'Eliana',
      age: 42,
    },
  ]);
}
