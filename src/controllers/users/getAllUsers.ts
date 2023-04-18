import { NextFunction, Response } from 'express';
import { statusResponse } from '../../utils/httpResponses';
import StatusCode from 'status-code-enum';
import { TypedRequest, User } from '../../types';

export function getAllUsers(
  req: TypedRequest<{ id: string }>,
  res: Response,
  next: NextFunction
) {
  const data: User[] = [
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
