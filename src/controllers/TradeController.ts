import { NextFunction, Request, Response, RequestHandler } from 'express';

export interface TradeController {

    getAllShares(req: Request, res: Response, next: NextFunction): Promise<RequestHandler>;

    getAllTrades(req: Request, res: Response, next: NextFunction): Promise<RequestHandler>;
}
