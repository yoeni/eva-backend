import { NextFunction, Request, Response, RequestHandler } from 'express';

export interface AuthController {

    serverAuth(req: Request, res: Response, next: NextFunction): Promise<RequestHandler>;

    loginWithEmail(req: Request, res: Response, next: NextFunction): Promise<RequestHandler>;

}
