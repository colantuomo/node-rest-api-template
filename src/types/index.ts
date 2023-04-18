import { Request, Response } from 'express';

export interface TypedRequest<T extends {} = any> extends Request {
  params: T;
}

export interface TypedResponse extends Response {
  locals: {
    token: string;
  };
}

export interface User {
  name: string;
  age: number;
}
