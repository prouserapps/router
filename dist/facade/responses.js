"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ok = ok;
exports.created = created;
exports.accepted = accepted;
exports.noContent = noContent;
exports.redirectTo = redirectTo;
const http_status_code_1 = require("../http-status-code");
function ok(data) {
    return { statusCode: http_status_code_1.HttpStatusCode.Ok, body: data };
}
function created(data) {
    return { statusCode: http_status_code_1.HttpStatusCode.Created, body: data };
}
function accepted() {
    return { statusCode: http_status_code_1.HttpStatusCode.Accepted, body: null };
}
function noContent() {
    return { statusCode: http_status_code_1.HttpStatusCode.NoContent, body: null };
}
function redirectTo(url) {
    return { statusCode: http_status_code_1.HttpStatusCode.PermanentRedirect, redirectUrl: url };
}
//# sourceMappingURL=responses.js.map