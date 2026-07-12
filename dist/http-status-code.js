"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HttpStatusCode = void 0;
var HttpStatusCode;
(function (HttpStatusCode) {
    HttpStatusCode[HttpStatusCode["NoConnection"] = 0] = "NoConnection";
    /**
     * @description RFC 7231, 6.2.1
     * @link https://tools.ietf.org/html/rfc7231#section-6.2.1
     */
    HttpStatusCode[HttpStatusCode["Continue"] = 100] = "Continue";
    /**
     * @description RFC 7231, 6.2.2
     * @link https://tools.ietf.org/html/rfc7231#section-6.2.2
     */
    HttpStatusCode[HttpStatusCode["SwitchingProtocols"] = 101] = "SwitchingProtocols";
    /**
     * @description RFC 2518, 10.1
     * @link https://tools.ietf.org/html/rfc2518#section-10.1
     */
    HttpStatusCode[HttpStatusCode["Processing"] = 102] = "Processing";
    /**
     * @description RFC 8297
     * @link https://tools.ietf.org/html/rfc8297
     */
    HttpStatusCode[HttpStatusCode["EarlyHints"] = 103] = "EarlyHints";
    /**
     * @description RFC 7231, 6.3.1
     * @link https://tools.ietf.org/html/rfc7231#section-6.3.1
     */
    HttpStatusCode[HttpStatusCode["Ok"] = 200] = "Ok";
    /**
     * @description RFC 7231, 6.3.2
     * @link https://tools.ietf.org/html/rfc7231#section-6.3.2
     */
    HttpStatusCode[HttpStatusCode["Created"] = 201] = "Created";
    /**
     * @description RFC 7231, 6.3.3
     * @link https://tools.ietf.org/html/rfc7231#section-6.3.3
     */
    HttpStatusCode[HttpStatusCode["Accepted"] = 202] = "Accepted";
    /**
     * @description RFC 7231, 6.3.4
     * @link https://tools.ietf.org/html/rfc7231#section-6.3.4
     */
    HttpStatusCode[HttpStatusCode["NonAuthoritativeInfo"] = 203] = "NonAuthoritativeInfo";
    /**
     * @description RFC 7231, 6.3.5
     * @link https://tools.ietf.org/html/rfc7231#section-6.3.5
     */
    HttpStatusCode[HttpStatusCode["NoContent"] = 204] = "NoContent";
    /**
     * @description RFC 7231, 6.3.6
     * @link https://tools.ietf.org/html/rfc7231#section-6.3.6
     */
    HttpStatusCode[HttpStatusCode["ResetContent"] = 205] = "ResetContent";
    /**
     * @description RFC 7233, 4.1
     * @link https://tools.ietf.org/html/rfc7233#section-4.1
     */
    HttpStatusCode[HttpStatusCode["PartialContent"] = 206] = "PartialContent";
    /**
     * @description RFC 4918, 11.1
     * @link https://tools.ietf.org/html/rfc4918#section-11.1
     */
    HttpStatusCode[HttpStatusCode["MultiStatus"] = 207] = "MultiStatus";
    /**
     * @description RFC 5842, 7.1
     * @link https://tools.ietf.org/html/rfc5842#section-7.1
     */
    HttpStatusCode[HttpStatusCode["AlreadyReported"] = 208] = "AlreadyReported";
    /**
     * @description RFC 3229, 10.4.1
     * @link https://tools.ietf.org/html/rfc3229#section-10.4.1
     */
    HttpStatusCode[HttpStatusCode["IMUsed"] = 226] = "IMUsed";
    /**
     * @description RFC 7231, 6.4.1
     * @link https://tools.ietf.org/html/rfc7231#section-6.4.1
     */
    HttpStatusCode[HttpStatusCode["MultipleChoices"] = 300] = "MultipleChoices";
    /**
     * @description RFC 7231, 6.4.2
     * @link https://tools.ietf.org/html/rfc7231#section-6.4.2
     */
    HttpStatusCode[HttpStatusCode["MovedPermanently"] = 301] = "MovedPermanently";
    /**
     * @description RFC 7231, 6.4.3
     * @link https://tools.ietf.org/html/rfc7231#section-6.4.3
     */
    HttpStatusCode[HttpStatusCode["Found"] = 302] = "Found";
    /**
     * @description RFC 7231, 6.4.4
     * @link https://tools.ietf.org/html/rfc7231#section-6.4.4
     */
    HttpStatusCode[HttpStatusCode["SeeOther"] = 303] = "SeeOther";
    /**
     * @description RFC 7232, 4.1
     * @link https://tools.ietf.org/html/rfc7232#section-4.1
     */
    HttpStatusCode[HttpStatusCode["NotModified"] = 304] = "NotModified";
    /**
     * @description RFC 7231, 6.4.5
     * @link https://tools.ietf.org/html/rfc7231#section-6.4.5
     */
    HttpStatusCode[HttpStatusCode["UseProxy"] = 305] = "UseProxy";
    /**
     * @description RFC 7231, 6.4.6 (Unused)
     * @link https://tools.ietf.org/html/rfc7231#section-6.4.6
     */
    HttpStatusCode[HttpStatusCode["_"] = 306] = "_";
    /**
     * @description RFC 7231, 6.4.7
     * @link https://tools.ietf.org/html/rfc7231#section-6.4.7
     */
    HttpStatusCode[HttpStatusCode["TemporaryRedirect"] = 307] = "TemporaryRedirect";
    /**
     * @description RFC 7538, 3
     * @link https://tools.ietf.org/html/rfc7538#section-3
     */
    HttpStatusCode[HttpStatusCode["PermanentRedirect"] = 308] = "PermanentRedirect";
    /**
     * @description RFC 7231, 6.5.1
     * @link https://tools.ietf.org/html/rfc7231#section-6.5.1
     */
    HttpStatusCode[HttpStatusCode["BadRequest"] = 400] = "BadRequest";
    /**
     * @description RFC 7235, 3.1
     * @link https://tools.ietf.org/html/rfc7235#section-3.1
     */
    HttpStatusCode[HttpStatusCode["Unauthorized"] = 401] = "Unauthorized";
    /**
     * @description RFC 7231, 6.5.2
     * @link https://tools.ietf.org/html/rfc7231#section-6.5.2
     */
    HttpStatusCode[HttpStatusCode["PaymentRequired"] = 402] = "PaymentRequired";
    /**
     * @description RFC 7231, 6.5.3
     * @link https://tools.ietf.org/html/rfc7231#section-6.5.3
     */
    HttpStatusCode[HttpStatusCode["Forbidden"] = 403] = "Forbidden";
    /**
     * @description RFC 7231, 6.5.4
     * @link https://tools.ietf.org/html/rfc7231#section-6.5.4
     */
    HttpStatusCode[HttpStatusCode["NotFound"] = 404] = "NotFound";
    /**
     * @description RFC 7231, 6.5.5
     * @link https://tools.ietf.org/html/rfc7231#section-6.5.5
     */
    HttpStatusCode[HttpStatusCode["MethodNotAllowed"] = 405] = "MethodNotAllowed";
    /**
     * @description RFC 7231, 6.5.6
     * @link https://tools.ietf.org/html/rfc7231#section-6.5.6
     */
    HttpStatusCode[HttpStatusCode["NotAcceptable"] = 406] = "NotAcceptable";
    /**
     * @description RFC 7235, 3.2
     * @link https://tools.ietf.org/html/rfc7235#section-3.2
     */
    HttpStatusCode[HttpStatusCode["ProxyAuthRequired"] = 407] = "ProxyAuthRequired";
    /**
     * @description RFC 7231, 6.5.7
     * @link https://tools.ietf.org/html/rfc7231#section-6.5.7
     */
    HttpStatusCode[HttpStatusCode["RequestTimeout"] = 408] = "RequestTimeout";
    /**
     * @description RFC 7231, 6.5.8
     * @link https://tools.ietf.org/html/rfc7231#section-6.5.8
     */
    HttpStatusCode[HttpStatusCode["Conflict"] = 409] = "Conflict";
    /**
     * @description RFC 7231, 6.5.9
     * @link https://tools.ietf.org/html/rfc7231#section-6.5.9
     */
    HttpStatusCode[HttpStatusCode["Gone"] = 410] = "Gone";
    /**
     * @description RFC 7231, 6.5.10
     * @link https://tools.ietf.org/html/rfc7231#section-6.5.10
     */
    HttpStatusCode[HttpStatusCode["LengthRequired"] = 411] = "LengthRequired";
    /**
     * @description RFC 7232, 4.2
     * @link https://tools.ietf.org/html/rfc7232#section-4.2
     */
    HttpStatusCode[HttpStatusCode["PreconditionFailed"] = 412] = "PreconditionFailed";
    /**
     * @description RFC 7231, 6.5.11
     * @link https://tools.ietf.org/html/rfc7231#section-6.5.11
     */
    HttpStatusCode[HttpStatusCode["RequestEntityTooLarge"] = 413] = "RequestEntityTooLarge";
    /**
     * @description RFC 7231, 6.5.12
     * @link https://tools.ietf.org/html/rfc7231#section-6.5.12
     */
    HttpStatusCode[HttpStatusCode["RequestURITooLong"] = 414] = "RequestURITooLong";
    /**
     * @description RFC 7231, 6.5.13
     * @link https://tools.ietf.org/html/rfc7231#section-6.5.13
     */
    HttpStatusCode[HttpStatusCode["UnsupportedMediaType"] = 415] = "UnsupportedMediaType";
    /**
     * @description RFC 7233, 4.4
     * @link https://tools.ietf.org/html/rfc7233#section-4.4
     */
    HttpStatusCode[HttpStatusCode["RequestedRangeNotSatisfiable"] = 416] = "RequestedRangeNotSatisfiable";
    /**
     * @description RFC 7231, 6.5.14
     * @link https://tools.ietf.org/html/rfc7231#section-6.5.14
     */
    HttpStatusCode[HttpStatusCode["ExpectationFailed"] = 417] = "ExpectationFailed";
    /**
     * @description RFC 7168, 2.3.3
     * @link https://tools.ietf.org/html/rfc7168#section-2.3.3
     */
    HttpStatusCode[HttpStatusCode["Teapot"] = 418] = "Teapot";
    /**
     * @description RFC 7540, 9.1.2
     * @link https://tools.ietf.org/html/rfc7540#section-9.1.2
     */
    HttpStatusCode[HttpStatusCode["MisdirectedRequest"] = 421] = "MisdirectedRequest";
    /**
     * @description RFC 4918, 11.2
     * @link https://tools.ietf.org/html/rfc4918#section-11.2
     */
    HttpStatusCode[HttpStatusCode["UnprocessableEntity"] = 422] = "UnprocessableEntity";
    /**
     * @description RFC 4918, 11.3
     * @link https://tools.ietf.org/html/rfc4918#section-11.3
     */
    HttpStatusCode[HttpStatusCode["Locked"] = 423] = "Locked";
    /**
     * @description RFC 4918, 11.4
     * @link https://tools.ietf.org/html/rfc4918#section-11.4
     */
    HttpStatusCode[HttpStatusCode["FailedDependency"] = 424] = "FailedDependency";
    /**
     * @description RFC 8470, 5.2.
     * @link https://tools.ietf.org/html/rfc8470#section-5.2
     */
    HttpStatusCode[HttpStatusCode["TooEarly"] = 425] = "TooEarly";
    /**
     * @description RFC 7231, 6.5.15
     * @link https://tools.ietf.org/html/rfc7231#section-6.5.15
     */
    HttpStatusCode[HttpStatusCode["UpgradeRequired"] = 426] = "UpgradeRequired";
    /**
     * @description RFC 6585, 3
     * @link https://tools.ietf.org/html/rfc6585#section-3
     */
    HttpStatusCode[HttpStatusCode["PreconditionRequired"] = 428] = "PreconditionRequired";
    /**
     * @description RFC 6585, 4
     * @link https://tools.ietf.org/html/rfc6585#section-4
     */
    HttpStatusCode[HttpStatusCode["TooManyRequests"] = 429] = "TooManyRequests";
    /**
     * @description RFC 6585, 5
     * @link https://tools.ietf.org/html/rfc6585#section-5
     */
    HttpStatusCode[HttpStatusCode["RequestHeaderFieldsTooLarge"] = 431] = "RequestHeaderFieldsTooLarge";
    /**
     * @description RFC 7725, 3
     * @link https://tools.ietf.org/html/rfc7725#section-3
     */
    HttpStatusCode[HttpStatusCode["UnavailableForLegalReasons"] = 451] = "UnavailableForLegalReasons";
    /**
     * @description RFC 7231, 6.6.1
     * @link https://tools.ietf.org/html/rfc7231#section-6.6.1
     */
    HttpStatusCode[HttpStatusCode["InternalServerError"] = 500] = "InternalServerError";
    /**
     * @description RFC 7231, 6.6.2
     * @link https://tools.ietf.org/html/rfc7231#section-6.6.2
     */
    HttpStatusCode[HttpStatusCode["NotImplemented"] = 501] = "NotImplemented";
    /**
     * @description RFC 7231, 6.6.3
     * @link https://tools.ietf.org/html/rfc7231#section-6.6.3
     */
    HttpStatusCode[HttpStatusCode["BadGateway"] = 502] = "BadGateway";
    /**
     * @description RFC 7231, 6.6.4
     * @link https://tools.ietf.org/html/rfc7231#section-6.6.4
     */
    HttpStatusCode[HttpStatusCode["ServiceUnavailable"] = 503] = "ServiceUnavailable";
    /**
     * @description RFC 7231, 6.6.5
     * @link https://tools.ietf.org/html/rfc7231#section-6.6.5
     */
    HttpStatusCode[HttpStatusCode["GatewayTimeout"] = 504] = "GatewayTimeout";
    /**
     * @description RFC 7231, 6.6.6
     * @link https://tools.ietf.org/html/rfc7231#section-6.6.6
     */
    HttpStatusCode[HttpStatusCode["HTTPVersionNotSupported"] = 505] = "HTTPVersionNotSupported";
    /**
     * @description RFC 2295, 8.1
     * @link https://tools.ietf.org/html/rfc2295#section-8.1
     */
    HttpStatusCode[HttpStatusCode["VariantAlsoNegotiates"] = 506] = "VariantAlsoNegotiates";
    /**
     * @description RFC 4918, 11.5
     * @link https://tools.ietf.org/html/rfc4918#section-11.5
     */
    HttpStatusCode[HttpStatusCode["InsufficientStorage"] = 507] = "InsufficientStorage";
    /**
     * @description RFC 5842, 7.2
     * @link https://tools.ietf.org/html/rfc5842#section-7.2
     */
    HttpStatusCode[HttpStatusCode["LoopDetected"] = 508] = "LoopDetected";
    /**
     * @description RFC 2774, 7
     * @link https://tools.ietf.org/html/rfc2774#section-7
     */
    HttpStatusCode[HttpStatusCode["Notmergeed"] = 510] = "Notmergeed";
    /**
     * @description RFC 6585, 6
     * @link https://tools.ietf.org/html/rfc6585#section-6
     */
    HttpStatusCode[HttpStatusCode["NetworkAuthenticationRequired"] = 511] = "NetworkAuthenticationRequired";
})(HttpStatusCode || (exports.HttpStatusCode = HttpStatusCode = {}));
//# sourceMappingURL=http-status-code.js.map