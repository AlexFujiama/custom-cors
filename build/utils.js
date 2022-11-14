"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.regexForAny = exports.defaultError = void 0;
exports.defaultError = { status: 403, response: { statusCode: 403, error: 'Not allowed by CORS' } };
const regexForAny = (a) => new RegExp(a, 'gm');
exports.regexForAny = regexForAny;
//# sourceMappingURL=utils.js.map