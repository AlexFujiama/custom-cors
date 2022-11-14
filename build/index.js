"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cors = void 0;
const corsConfig_1 = require("./corsConfig");
const utils_1 = require("./utils");
const callback_1 = require("./callback");
const verify_1 = require("./verify");
const cors = (corsConfig) => (req, res, next) => {
    corsConfig = new corsConfig_1.CorsConfig(corsConfig);
    const origin = req.headers.origin;
    const reqPath = req.path;
    const method = req.method;
    const callback = (0, callback_1.callback)(req, res, next);
    if (corsConfig.ignorePath) {
        if (typeof corsConfig.ignorePath == 'string' && (0, verify_1.verifyPathString)(corsConfig.ignorePath, reqPath)) {
            callback(null, true);
            return;
        }
        else if (Array.isArray(corsConfig.ignorePath)) {
            for (const ignorePath of corsConfig.ignorePath) {
                if (typeof ignorePath == 'string' && (0, verify_1.verifyPathString)(ignorePath, reqPath)) {
                    callback(null, true);
                    return;
                }
                ;
            }
            ;
        }
        ;
    }
    ;
    if (Array.isArray(corsConfig.methods))
        corsConfig.methods = corsConfig.methods.join();
    corsConfig.methods = corsConfig.methods.toUpperCase();
    if (corsConfig.methods == '*' || corsConfig.methods.includes(method.toUpperCase())) {
        if (typeof corsConfig.origin == 'function') {
            corsConfig.origin(origin, callback);
        }
        else if (typeof corsConfig.origin == 'string' && (0, verify_1.verifyOriginString)(corsConfig.origin, origin)) {
            callback(null, true);
            return;
        }
        else if (typeof corsConfig.origin == 'boolean' && corsConfig.origin) {
            callback(null, true);
            return;
        }
        else if (corsConfig.origin instanceof RegExp && origin && (0, verify_1.verifyOriginRegex)(corsConfig.origin, origin)) {
            callback(null, true);
            return;
        }
        else if (Array.isArray(corsConfig.origin)) {
            for (const allowedOrigin of corsConfig.origin) {
                if (typeof allowedOrigin == 'string' && (0, verify_1.verifyOriginString)(allowedOrigin, origin)) {
                    callback(null, true);
                    return;
                }
                else if (allowedOrigin instanceof RegExp && origin && (0, verify_1.verifyOriginRegex)(allowedOrigin, origin)) {
                    callback(null, true);
                    return;
                }
                ;
            }
            ;
        }
        ;
    }
    ;
    callback(utils_1.defaultError);
};
exports.cors = cors;
exports.default = exports.cors;
//# sourceMappingURL=index.js.map