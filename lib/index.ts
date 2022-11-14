import { Request, Response, NextFunction } from 'express';
import { CorsConfig } from './corsConfig';
import { defaultError } from './utils';
import { callback as defaultCallback } from './callback';
import { verifyOriginRegex, verifyOriginString, verifyPathString } from './verify';

export const cors = (corsConfig?: CorsConfig | string) => (req: Request, res: Response, next: NextFunction) => {
    corsConfig = new CorsConfig(corsConfig);
    const origin = req.headers.origin;
    const reqPath = req.path;
    const method = req.method;
    const callback = defaultCallback(req, res, next);

    if (corsConfig.ignorePath) {
        if (typeof corsConfig.ignorePath == 'string' && verifyPathString(corsConfig.ignorePath, reqPath)) {
            callback(null, true);
            return;
        } else if (Array.isArray(corsConfig.ignorePath)) {
            for (const ignorePath of corsConfig.ignorePath) {
                if (typeof ignorePath == 'string' && verifyPathString(ignorePath, reqPath)) {
                    callback(null, true);
                    return;
                };
            };
        };
    };

    if (Array.isArray(corsConfig.methods)) corsConfig.methods = corsConfig.methods.join();
    corsConfig.methods = corsConfig.methods.toUpperCase();

    if (corsConfig.methods == '*' || corsConfig.methods.includes(method.toUpperCase())) {
        if (typeof corsConfig.origin == 'function') {
            corsConfig.origin(origin, callback);
        } else if (typeof corsConfig.origin == 'string' && verifyOriginString(corsConfig.origin, origin)) {
            callback(null, true);
            return;
        } else if (typeof corsConfig.origin == 'boolean' && corsConfig.origin) {
            callback(null, true);
            return;
        } else if (corsConfig.origin instanceof RegExp && origin && verifyOriginRegex(corsConfig.origin, origin)) {
            callback(null, true);
            return;
        } else if (Array.isArray(corsConfig.origin)) {
            for (const allowedOrigin of corsConfig.origin) {
                if (typeof allowedOrigin == 'string' && verifyOriginString(allowedOrigin, origin)) {
                    callback(null, true);
                    return;
                } else if (allowedOrigin instanceof RegExp && origin && verifyOriginRegex(allowedOrigin, origin)) {
                    callback(null, true);
                    return;
                };
            };
        };
    };

    callback(defaultError);
};

export default cors;
