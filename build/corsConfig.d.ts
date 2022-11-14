export declare class CorsConfig {
    constructor(corsConfig?: CorsConfig | string);
    origin?: Function | string | boolean | RegExp | (string | RegExp)[];
    methods?: String | String[];
    ignorePath?: String | String[];
}
