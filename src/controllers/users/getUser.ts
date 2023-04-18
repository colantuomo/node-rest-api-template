import { NextFunction, Response } from 'express';
import { TypedRequest, TypedResponse, User } from '../../types';

export function getUser(
  req: TypedRequest,
  res: TypedResponse,
  next: NextFunction
): Response<User> {
  return res.status(200).json({
    name: 'Paulo',
    age: 28,
  });
}
