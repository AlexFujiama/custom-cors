import { CorsConfig } from './corsConfig';
export declare const cors: (corsConfig?: CorsConfig | string) => (req: Request, res: Response, next: NextFunction) => void;
export default cors;
