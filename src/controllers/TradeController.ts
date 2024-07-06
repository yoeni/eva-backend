import { NextFunction, Request, Response, RequestHandler } from 'express';

export interface TradeController {

    getAllTrades(req: Request, res: Response, next: NextFunction): Promise<RequestHandler>;
}
