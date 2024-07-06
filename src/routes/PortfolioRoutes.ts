
import { PortfolioController } from "../controllers/PortfolioController";
import { ControllerFactory } from "../factories/ControllerFactory";

class PortfolioRoutes {
    private portfolioController: PortfolioController

    constructor() {
        this.portfolioController = ControllerFactory.getPortfolioController();
    }

    public setRoutes(apiRouter: any) {
        
        apiRouter.get('/portfolio/id/:id', (req, res, next) => this.portfolioController.getUserPortfolios(req, res, next));
        apiRouter.get('/portfolio/trades/:id', (req, res, next) => this.portfolioController.getPorfolioTrades(req, res, next));
        
        apiRouter.post('/portfolio/trade', (req, res, next) => this.portfolioController.makeTrade(req, res, next));
        
        //apiRouter.post('/portfolio/create', (req, res, next) => this.portfolioController.createPortfolio(req, res, next));

        //apiRouter.delete('/portfolio/:id', (req, res, next) => this.portfolioController.deletePortfolio(req, res, next));
    }
}

export default new PortfolioRoutes();
