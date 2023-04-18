import { NextFunction, Request, Response } from 'express';

export function checkAuthorization(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const token = req.header('Authorization');
  if (!token || token === undefined) {
    return res.sendStatus(401);
  }
  res.locals.token = token;
  next();
}
