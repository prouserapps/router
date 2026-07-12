import type { HttpMethod } from './http-method';
import type { HttpStatusCode } from './http-status-code';
export interface IController {
    handle(request: Partial<IRequest>): Promise<IResponse>;
}
export interface IResponse<Body = any> {
    statusCode: HttpStatusCode;
    body?: Body | null;
    redirectUrl?: URL | string;
    headers?: Headers;
}
export interface IRequest<Body = any, Params = any, Query = any, R = any> {
    url: string;
    method: HttpMethod;
    body: Body;
    params: Params;
    query: Query;
    origin: string;
    headers: Headers;
    root: R;
    [key: string]: any;
}
//# sourceMappingURL=controller.d.ts.map