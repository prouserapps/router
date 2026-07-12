import { IResponse } from '../controller';
export declare function ok<T>(data: T): IResponse<T>;
export declare function created<T>(data: T): IResponse<T>;
export declare function accepted(): IResponse;
export declare function noContent(): IResponse;
export declare function redirectTo(url: URL | string): IResponse;
//# sourceMappingURL=responses.d.ts.map