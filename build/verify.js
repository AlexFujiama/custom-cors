"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyPathString = exports.verifyOriginRegex = exports.verifyOriginString = void 0;
const utils_1 = require("./utils");
function verifyOriginString(allowedOrigin, origin) {
    var _a;
    if (allowedOrigin == '*') {
        return true;
    }
    else if (allowedOrigin.includes('*') && origin && origin == ((_a = origin.match((0, utils_1.regexForAny)(allowedOrigin.replace(/\./g, '\\.').replace(/\*/g, '.*')))) === null || _a === void 0 ? void 0 : _a.shift())) {
        return true;
    }
    else if (origin == allowedOrigin) {
        return true;
    }
    else {
        return false;
    }
    ;
}
exports.verifyOriginString = verifyOriginString;
;
function verifyOriginRegex(allowedOrigin, origin) {
    var _a;
    const originMatch = (_a = origin.match(allowedOrigin)) === null || _a === void 0 ? void 0 : _a.shift();
    if (originMatch && origin == originMatch)
        return true;
    else
        return false;
}
exports.verifyOriginRegex = verifyOriginRegex;
;
function verifyPathString(ignorePath, reqPath) {
    var _a;
    if (!ignorePath.startsWith('/'))
        ignorePath = '/' + ignorePath;
    const ignoreExactPath = [ignorePath, ignorePath + '/'];
    const ignoreAnyMatch = (_a = reqPath.match((0, utils_1.regexForAny)(ignorePath.replace("*", ".*")))) === null || _a === void 0 ? void 0 : _a.shift();
    if (ignorePath == '*') {
        return true;
    }
    else if (ignoreExactPath.includes(reqPath) || ignoreExactPath.includes(reqPath + '/')) {
        return true;
    }
    else if (ignorePath.includes('*') && ignoreAnyMatch && ignoreAnyMatch == reqPath) {
        return true;
    }
    else {
        return false;
    }
    ;
}
exports.verifyPathString = verifyPathString;
;
//# sourceMappingURL=verify.js.map