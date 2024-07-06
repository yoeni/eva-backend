
import { TradeController } from "../controllers/TradeController";
import { ControllerFactory } from "../factories/ControllerFactory";

class TradeRoutes {
    private tradeController: TradeController

    constructor() {
        this.tradeController = ControllerFactory.getTradeController();
    }

    public setRoutes(apiRouter: any) {
        
        apiRouter.get('/trade/all/', (req, res, next) => this.tradeController.getAllTrades(req, res, next));
    }
}

export default new TradeRoutes();
