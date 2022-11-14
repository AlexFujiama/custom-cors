"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.callback = void 0;
const callback = (req, res, next) => (error, allowedOrigin) => {
    if (error)
        res.status(error.status).send(error.response);
    else if (allowedOrigin)
        next();
    else
        res.end();
};
exports.callback = callback;
//# sourceMappingURL=callback.js.map