"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.adaptExpress = adaptExpress;
function adaptExpress(controller) {
    return async (req, res) => {
        const response = await controller().handle({
            url: req.url,
            method: req.method.toUpperCase(),
            body: req.body,
            params: req.params,
            origin: req.hostname,
            query: req.query,
            headers: new Headers(req.headers),
            root: req,
        });
        if (response.headers) {
            for (const [key, value] of response.headers) {
                res.header(key, value);
            }
        }
        if (response.redirectUrl) {
            res.redirect(response.redirectUrl.toString());
            return;
        }
        if (response.body === null || response.body === undefined) {
            res.status(response.statusCode).end();
            return;
        }
        res.status(response.statusCode).json(response.body).end();
    };
}
//# sourceMappingURL=express.adapter.js.map