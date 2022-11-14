"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CorsConfig = void 0;
class CorsConfig {
    constructor(corsConfig) {
        if (typeof corsConfig == 'string') {
            this.origin = corsConfig;
            this.methods = '*';
            this.ignorePath = null;
        }
        else {
            this.origin = (corsConfig === null || corsConfig === void 0 ? void 0 : corsConfig.origin) || ((corsConfig === null || corsConfig === void 0 ? void 0 : corsConfig.origin) == false ? false : true);
            this.methods = (corsConfig === null || corsConfig === void 0 ? void 0 : corsConfig.methods) || '*';
            this.ignorePath = (corsConfig === null || corsConfig === void 0 ? void 0 : corsConfig.ignorePath) || null;
        }
        ;
    }
    ;
}
exports.CorsConfig = CorsConfig;
;
//# sourceMappingURL=corsConfig.js.map