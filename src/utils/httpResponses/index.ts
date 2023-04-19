import { Response } from 'express';
import { StatusCode } from 'status-code-enum';
import { Empty, TypedResponse } from '../../types';

export function statusResponse<T = Empty>(
  res: TypedResponse,
  response: T,
  statusCode: keyof typeof StatusCode
): Response<T> {
  return res.status(StatusCode[statusCode]).json(response);
}
