import { NextFunction, Request, Response, RequestHandler } from 'express';

export interface UserController {

    getUserByEmail(req: Request, res: Response, next: NextFunction): Promise<RequestHandler>;

    getUserInfo(req: Request, res: Response, next: NextFunction): Promise<RequestHandler>;

    addUser(req: Request, res: Response, next: NextFunction): Promise<RequestHandler>;

    //forgotPassword(req: Request, res: Response, next: NextFunction): Promise<RequestHandler>;

    updatePassword(req: Request, res: Response, next: NextFunction): Promise<RequestHandler>;

    resetPassword(req: Request, res: Response, next: NextFunction): Promise<RequestHandler>;

    deleteUserById(req: Request, res: Response, next: NextFunction): Promise<RequestHandler>;
}
