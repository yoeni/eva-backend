import { NextFunction, Request, Response, RequestHandler } from 'express';

export interface PortfolioController {

    getUserPortfolios(req: Request, res: Response, next: NextFunction): Promise<RequestHandler>;

    getPorfolioTrades(req: Request, res: Response, next: NextFunction): Promise<RequestHandler>;

    makeTrade(req: Request, res: Response, next: NextFunction): Promise<RequestHandler>;


    //for multiple portfolios
    createPortfolio(req: Request, res: Response, next: NextFunction): Promise<RequestHandler>;

    deletePortfolio(req: Request, res: Response, next: NextFunction): Promise<RequestHandler>;
}
