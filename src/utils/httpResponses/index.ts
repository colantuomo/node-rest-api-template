import { Response } from 'express';

export function success<T = any>(res: Response, response: T) {
  res.status(200).json(response);
}
