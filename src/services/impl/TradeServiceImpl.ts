import { TradeDAO } from "../../daos/Trade/TradeDAO";
import Service from "../../Service";
import { TradeService } from "../TradeService";
import { tradeType } from "../../daos/Trade/TradeDAO";

class TradeServiceImpl extends Service implements TradeService {

    private tradeDAO: TradeDAO;
    private static instance: TradeService;

    constructor(tradeDAO: TradeDAO) {
        super();
        this.tradeDAO = tradeDAO
    }

    public static getInstance(tradeDAO: TradeDAO): TradeService {
        if (!this.instance) {
            this.instance = new TradeServiceImpl(tradeDAO);
        }
        return this.instance;
    }

    public getPorfolioTrades = async (portfolioId: string) => {
        return await this.tradeDAO.getPorfolioTrades(portfolioId);
    }

    public getAllTrades = async () => {
        return await this.tradeDAO.getAllTrades();
    }

    public makeTrade = async (portfolioId: string, shareId: string, tradeType: tradeType, quantity: number, tradePrice: number) => {
        return await this.tradeDAO.makeTrade(portfolioId, shareId, tradeType, quantity, tradePrice);
    }
}
export default TradeServiceImpl;
