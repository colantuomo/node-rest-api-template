import { Response } from 'express';
import { StatusCode } from 'status-code-enum';

export function statusResponse<T = any>(
  res: Response,
  response: T,
  statusCode: StatusCode
): Response<T> {
  return res.status(statusCode).json(response);
}
