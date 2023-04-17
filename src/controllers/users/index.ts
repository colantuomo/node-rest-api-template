import { NextFunction, Request, Response } from 'express';
import { statusResponse } from '../../utils/httpResponses';
import StatusCode from 'status-code-enum';

interface User {
  name: string;
  age: number;
}

interface TypedRequest<T extends {}> extends Request {
  params: T;
}

export function getAllUsers(
  req: TypedRequest<{ id: string }>,
  res: Response,
  next: NextFunction
) {
  const data = [
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
  ];
  return statusResponse<User[]>(res, data, StatusCode.SuccessOK);
}

export function getUser(
  req: Request,
  res: Response,
  next: NextFunction
): Response<User> {
  return res.status(200).json({
    name: 'Paulo',
    age: 28,
  });
}
