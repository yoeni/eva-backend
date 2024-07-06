import AuthRoutes from "./routes/AuthRoutes";
import config from "../config";
import UserRoutes from "./routes/UserRoutes";
import TradeRoutes from "./routes/TradeRoutes";
import PortfolioRoutes from "./routes/PortfolioRoutes";

class Router {
    private readonly apiRouter: any;
    constructor(apiRouter) {
        this.apiRouter = apiRouter;
        this.allowCors();
        this.init();
    }

    private init = (): void =>{
        // set root path ridirect
        AuthRoutes.setRoutes(this.apiRouter);
        UserRoutes.setRoutes(this.apiRouter);
        TradeRoutes.setRoutes(this.apiRouter);
        PortfolioRoutes.setRoutes(this.apiRouter);
        // Fix me. Will not catch errors thrown inside an async function
    }

    private allowCors = (): void => {
        this.apiRouter.use((req, res, next) => {
            //res.setHeader('Access-Control-Allow-Origin', config.CLIENT_URL);
            res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
            res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
            res.setHeader('Access-Control-Allow-Credentials', 'true');
            next();
        });
    }
}

export default Router

