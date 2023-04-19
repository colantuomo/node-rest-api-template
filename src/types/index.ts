import { Locals, Request, Response } from 'express';

export type Empty = NonNullable<unknown>;
export interface TypedRequest<T extends Empty = Empty> extends Request {
  params: T;
}

export interface TypedResponse extends Response {
  //TODO: find a way to custom type express locals
  locals: Locals;
}

export interface User {
  name: string;
  age: number;
}
