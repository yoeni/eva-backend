import { Response } from "../../../utils/ResponseUtil";
import { TradeDAO, TradeType } from "../TradeDAO";
import CacheDAOImpl from "../../Cache/impl/CacheDAOImpl";

class TradeCacheDAOImpl extends CacheDAOImpl implements TradeDAO {
    private tradeDAO: TradeDAO;
    private static instance: TradeDAO;

    constructor(tradeDAO: TradeDAO) {
        super();
        this.tradeDAO = tradeDAO;
    }

    public static getInstance(tradeDAO: TradeDAO): TradeDAO {
        if (!this.instance) {
            this.instance = new TradeCacheDAOImpl(tradeDAO);
        }
        return this.instance;
    }

    public getPorfolioTrades = async (portfolioId: string): Promise<Response> => {
        return await this.tradeDAO.getPorfolioTrades(portfolioId);
    }

    public getAllTrades = async (): Promise<Response> => {
        return await this.tradeDAO.getAllTrades();
    }

    public getShareTrades = async (shareId: string): Promise<Response> => {
        return await this.tradeDAO.getShareTrades(shareId);
    }

    public makeTrade = async (portfolioId: string, shareId: string, tradeType: TradeType, quantity: number, tradePrice: number): Promise<Response> => {
        return await this.tradeDAO.makeTrade(portfolioId, shareId, tradeType, quantity, tradePrice);
    }
}
export default TradeCacheDAOImpl;