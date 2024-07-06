import { NextFunction, Request, Response } from 'express';
import TradeDTO from "../../dtos/TradeDTO";
import Controller from "../../Controller";
import { TradeService } from "../../services/TradeService";
import { AuthService } from "../../services/AuthService";
import { TradeController } from "../TradeController";


class TradeControllerImpl extends Controller implements TradeController {
    private tradeDTO: TradeDTO;
    private tradeService: TradeService;
    private authService: AuthService;
    private static instance: TradeController;

    constructor(tradeDTO: TradeDTO, tradeService: TradeService, authService: AuthService) {
        super();
        this.tradeDTO = tradeDTO;
        this.tradeService = tradeService;
        this.authService = authService;
    }

    public static getInstance(tradeDTO: TradeDTO, tradeService: TradeService, authService: AuthService): TradeController {
        if (!this.instance) {
            this.instance = new TradeControllerImpl(tradeDTO, tradeService, authService);
        }
        return this.instance;
    }

    public getAllShares = async (req: Request, res: Response, next: NextFunction): Promise<any> => {
        let response = this.authService.serverAuth(req.header('x-auth-token'));
        if (!response.isSuccessfullExecution) {
            this.errorHttpResponse(res, response.code, response.message);
            return;
        }

        return await this.validateRequestParamsAndExecute(this.tradeDTO.getAllShares, req, res, this.tradeService.getAllShares());
    };

    public getAllTrades = async (req: Request, res: Response, next: NextFunction): Promise<any> => {
        let response = this.authService.serverAuth(req.header('x-auth-token'));
        if (!response.isSuccessfullExecution) {
            this.errorHttpResponse(res, response.code, response.message);
            return;
        }

        return await this.validateRequestParamsAndExecute(this.tradeDTO.getAllTrades, req, res, this.tradeService.getAllTrades());
    };
}
export default TradeControllerImpl;