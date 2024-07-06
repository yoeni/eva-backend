import { NextFunction, Request, Response } from 'express';
import Controller from "../../Controller";
import PortfolioDTO from '../../dtos/PortfolioDTO';
import { PortfolioService } from '../../services/PortfolioService';
import { PortfolioController } from '../PortfolioController';
import { AuthService } from '../../services/AuthService';
import { TradeService } from '../../services/TradeService';


class PortfolioControllerImpl extends Controller implements PortfolioController {
    private portfolioDTO: PortfolioDTO;
    private portfolioService: PortfolioService;
    private tradeService: TradeService;
    private authService: AuthService;
    private static instance: PortfolioController;

    constructor(portfolioDTO: PortfolioDTO, portfolioService: PortfolioService, tradeSerivce: TradeService, authService: AuthService) {
        super();
        this.portfolioDTO = portfolioDTO;
        this.portfolioService = portfolioService;
        this.authService = authService;
    }

    public static getInstance(portfolioDTO: PortfolioDTO, portfolioService: PortfolioService, tradeSerivce: TradeService,authService: AuthService): PortfolioController {
        if (!this.instance) {
            this.instance = new PortfolioControllerImpl(portfolioDTO, portfolioService, tradeSerivce, authService);
        }
        return this.instance;
    }

    public getUserPortfolios = async (req: Request, res: Response, next: NextFunction): Promise<any> => {
        let response = this.authService.serverAuth(req.header('x-auth-token'));
        if (!response.isSuccessfullExecution) {
            this.errorHttpResponse(res, response.code, response.message);
            return;
        }

        return await this.validateRequestParamsAndExecute(this.portfolioDTO.getUserPortfolios, req, res, this.portfolioService.getUserPortfolios(
            req.params.id
        ));
    };

    public getPorfolioTrades = async (req: Request, res: Response, next: NextFunction): Promise<any> => {
        let response = this.authService.serverAuth(req.header('x-auth-token'));
        if (!response.isSuccessfullExecution) {
            this.errorHttpResponse(res, response.code, response.message);
            return;
        }

        return await this.validateRequestParamsAndExecute(this.portfolioDTO.getPorfolioTrades, req, res, this.tradeService.getPorfolioTrades(
            req.params.id
        ));
    };


    public makeTrade = async (req: Request, res: Response, next: NextFunction): Promise<any> => {
        let response = this.authService.serverAuth(req.header('x-auth-token'));
        if (!response.isSuccessfullExecution) {
            this.errorHttpResponse(res, response.code, response.message);
            return;
        }

        response = await this.validateRequestBody(this.portfolioDTO.makeTrade, req);
        if (!response.isSuccessfullExecution) {
            this.errorHttpResponse(res, response.code, response.message);
            return;
        }

        response = await this.tradeService.makeTrade(
            req.body.portfolioId,
            req.body.shareId,
            req.body.tradeType,
            req.body.quantity,
            req.body.tradePrice
        );
        if (!response.isSuccessfullExecution) {
            this.errorHttpResponse(res, response.code, response.message);
            return;
        }

        response = await this.portfolioService.addShareToPortfolio(
            req.body.portfolioId,
            req.body.shareId,
            req.body.quantity
        );
        if (!response.isSuccessfullExecution) {
            this.errorHttpResponse(res, response.code, response.message);
            return;
        }
        this.successHttpResponse(res, response.code, response.message, response.result)
        return;
    };

    public createPortfolio = async (req: Request, res: Response, next: NextFunction): Promise<any> => {
        let response = this.authService.serverAuth(req.header('x-auth-token'));
        if (!response.isSuccessfullExecution) {
            this.errorHttpResponse(res, response.code, response.message);
            return;
        }

        return await this.validateRequestBodyAndExecute(this.portfolioDTO.createPortfolio, req, res, this.portfolioService.createPortfolio(
            req.body.id
        ));
    };

    public deletePortfolio = async (req: Request, res: Response, next: NextFunction): Promise<any> => {
        let response = this.authService.serverAuth(req.header('x-auth-token'));
        if (!response.isSuccessfullExecution) {
            this.errorHttpResponse(res, response.code, response.message);
            return;
        }

        return await this.validateRequestParamsAndExecute(this.portfolioDTO.deletePortfolio, req, res, this.portfolioService.deletePortfolio(
            req.params.id
        ));
    };
}
export default PortfolioControllerImpl;