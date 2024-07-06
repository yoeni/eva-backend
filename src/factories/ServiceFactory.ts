
import { AuthService } from "../services/AuthService";
import AuthServiceImpl from "../services/impl/AuthServiceImpl";
import PortfolioServiceImpl from "../services/impl/PortfolioServiceImpl";
import TradeServiceImpl from "../services/impl/TradeServiceImpl";
import UserServiceImpl from "../services/impl/UserServiceImpl";
import { PortfolioService } from "../services/PortfolioService";
import { TradeService } from "../services/TradeService";
import { UserService } from "../services/UserService";
import { DAOFactory } from "./DAOFactory";

export abstract class ServiceFactory {

    public static getAuthService = (): AuthService => {
        return AuthServiceImpl.getInstance();
    }

    public static getUserService = (): UserService => {
        return UserServiceImpl.getInstance(DAOFactory.getUserDAO());
    }

    public static getTradeService = (): TradeService => {
        return TradeServiceImpl.getInstance(DAOFactory.getTradeDAO());
    }

    public static getPortfolioService = (): PortfolioService => {
        return PortfolioServiceImpl.getInstance(DAOFactory.getPortfolioDAO());
    }
}
