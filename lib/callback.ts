import { Request, Response, NextFunction } from 'express';

export const callback = (req: Request, res: Response, next: NextFunction) => (error: any, allowedOrigin?: boolean) => {
    if (error) res.status(error.status).send(error.response);
    else if (allowedOrigin) next();
    else res.end();
};
