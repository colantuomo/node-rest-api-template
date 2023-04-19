import { TypedRequest, TypedResponse, User } from '../../types';
import { statusResponse } from '../../utils/httpResponses';

export function getUser(req: TypedRequest<{ id: string }>, res: TypedResponse) {
  return statusResponse<User>(
    res,
    {
      name: 'Paulo',
      age: 28,
    },
    'SuccessOK'
  );
}
