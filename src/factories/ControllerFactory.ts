
import { AuthController } from "../controllers/AuthController";
import AuthControllerImpl from "../controllers/impl/AuthControllerImpl";
import PortfolioControllerImpl from "../controllers/impl/PortfolioControllerImpl";
import TradeControllerImpl from "../controllers/impl/TradeControllerImpl";
import UserControllerImpl from "../controllers/impl/UserControllerImpl";
import { PortfolioController } from "../controllers/PortfolioController";
import { TradeController } from "../controllers/TradeController";
import { UserController } from "../controllers/UserController";
import {DTOFactory} from "./DTOFactory";
import { ServiceFactory } from "./ServiceFactory";

export abstract class ControllerFactory {

    public static getAuthController = (): AuthController => {
        return AuthControllerImpl.getInstance(DTOFactory.getAuthDTO(), ServiceFactory.getAuthService(), ServiceFactory.getUserService());
    }

    public static getUserController = (): UserController => {
        return UserControllerImpl.getInstance(DTOFactory.getUserDTO(),ServiceFactory.getUserService(), ServiceFactory.getAuthService());
    }

    public static getTradeController = (): TradeController => {
        return TradeControllerImpl.getInstance(DTOFactory.getTradeDTO(), ServiceFactory.getTradeService(), ServiceFactory.getAuthService());
    }

    public static getPortfolioController = (): PortfolioController => {
        return PortfolioControllerImpl.getInstance(DTOFactory.getPortfolioDTO(), ServiceFactory.getPortfolioService(), ServiceFactory.getTradeService(),ServiceFactory.getAuthService());
    }

}
