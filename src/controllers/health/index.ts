import { NextFunction, Request, Response } from 'express';

export function health(req: Request, res: Response, next: NextFunction) {
  res.status(200).json({
    status: 'BFF - Up and running',
  });
  next();
}
