import { statusResponse } from '../../utils/httpResponses';
import { TypedRequest, TypedResponse, User } from '../../types';

export function getAllUsers(req: TypedRequest, res: TypedResponse) {
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
  return statusResponse<User[]>(res, data, 'SuccessOK');
}
