import { NextFunction, Request, Response } from 'express';

export function checkAuthorization(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const token = req.header('Authorization');
  if (!token) {
    return res.sendStatus(401);
  }
  next();
}
