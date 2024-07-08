
import { TradeController } from "../controllers/TradeController";
import { ControllerFactory } from "../factories/ControllerFactory";

class TradeRoutes {
    private tradeController: TradeController

    constructor() {
        this.tradeController = ControllerFactory.getTradeController();
    }

    public setRoutes(apiRouter: any) {
        
        apiRouter.get('/trade/shares/all/', (req, res, next) => this.tradeController.getAllShares(req, res, next));
        
        apiRouter.get('/trade/trades/all/', (req, res, next) => this.tradeController.getAllTrades(req, res, next));
        
        apiRouter.get('/trade/trades/id/:id', (req, res, next) => this.tradeController.getShareTrades(req, res, next));
    }
}

export default new TradeRoutes();
