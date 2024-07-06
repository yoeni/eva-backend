
import PortfolioCacheDAOImpl from "../daos/Portfolio/impl/PortfolioCacheDAOImpl";
import PortfolioSQLDAOImpl from "../daos/Portfolio/impl/PortfolioSQLDAOImpl";
import { PortfolioDAO } from "../daos/Portfolio/PortfolioDAO";
import ShareCacheDAOImpl from "../daos/Share/impl/ShareCacheDAOImpl";
import ShareSQLDAOImpl from "../daos/Share/impl/ShareSQLDAOImpl";
import { ShareDAO } from "../daos/Share/ShareDAO";
import TradeCacheDAOImpl from "../daos/Trade/impl/TradeCacheDAOImpl";
import TradeSQLDAOImpl from "../daos/Trade/impl/TradeSQLDAOImpl";
import { TradeDAO } from "../daos/Trade/TradeDAO";
import UserCacheDAOImpl from "../daos/User/impl/UserCacheDAOImpl";
import UserSQLDAOImpl from "../daos/User/impl/UserSQLDAOImpl";
import { UserDAO } from "../daos/User/UserDAO";

export abstract class DAOFactory {

    public static getUserDAO = (): UserDAO => {
        return UserCacheDAOImpl.getInstance(UserSQLDAOImpl.getInstance());
    }

    public static getTradeDAO = (): TradeDAO => {
        return TradeCacheDAOImpl.getInstance(TradeSQLDAOImpl.getInstance());
    }
    
    public static getPortfolioDAO = (): PortfolioDAO => {
        return PortfolioCacheDAOImpl.getInstance(PortfolioSQLDAOImpl.getInstance());
    }
    
    public static getShareDAO = (): ShareDAO => {
        return ShareCacheDAOImpl.getInstance(ShareSQLDAOImpl.getInstance());
    }

}
