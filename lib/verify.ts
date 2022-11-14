import { regexForAny } from './utils';

export function verifyOriginString(allowedOrigin: string, origin: string): boolean {
    if (allowedOrigin == '*') {
        return true;
    } else if (allowedOrigin.includes('*') && origin && origin == origin.match(regexForAny(allowedOrigin.replace(/\./g, '\\.').replace(/\*/g, '.*')))?.shift()) {
        return true;
    } else if (origin == allowedOrigin) {
        return true;
    } else {
        return false;
    };
};

export function verifyOriginRegex(allowedOrigin: RegExp, origin: string): boolean {
    const originMatch = origin.match(allowedOrigin)?.shift();

    if (originMatch && origin == originMatch) return true;
    else return false;
};

export function verifyPathString(ignorePath: string, reqPath: string): boolean {
    if (!ignorePath.startsWith('/')) ignorePath = '/' + ignorePath;

    const ignoreExactPath = [ignorePath, ignorePath + '/'];
    const ignoreAnyMatch = reqPath.match(regexForAny(ignorePath.replace("*", ".*").replace('/', './')))?.shift();

    if (ignorePath == '*') {
        return true;
    } else if (ignoreExactPath.includes(reqPath) || ignoreExactPath.includes(reqPath + '/')) {
        return true;
    } else if (ignorePath.includes('*') && ignoreAnyMatch && ignoreAnyMatch == reqPath) {
        return true;
    } else {
        return false;
    };
};
