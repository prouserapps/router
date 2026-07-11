import { HttpStatusCode } from '../http-status-code';
import { IResponse } from '../controller';

export function ok<T>(data: T): IResponse<T> {
  return { statusCode: HttpStatusCode.Ok, body: data };
}

export function created<T>(data: T): IResponse<T> {
  return { statusCode: HttpStatusCode.Created, body: data };
}

export function accepted(): IResponse {
  return { statusCode: HttpStatusCode.Accepted, body: null };
}

export function noContent(): IResponse {
  return { statusCode: HttpStatusCode.NoContent, body: null };
}

export function redirectTo(url: URL | string): IResponse {
  return { statusCode: HttpStatusCode.PermanentRedirect, redirectUrl: url };
}
