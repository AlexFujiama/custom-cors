export class CorsConfig {
    constructor(corsConfig?: CorsConfig | string) {
        if (typeof corsConfig == 'string') {
            this.origin = corsConfig;
            this.methods = '*';
            this.ignorePath = null;
        } else {
            this.origin = corsConfig?.origin || (corsConfig?.origin == false ? false : true);
            this.methods = corsConfig?.methods || '*';
            this.ignorePath = corsConfig?.ignorePath || null;
        };
    };
    origin?: Function | string | boolean | RegExp | (string | RegExp)[];
    methods?: String | String[];
    ignorePath?: String | String[];
};
