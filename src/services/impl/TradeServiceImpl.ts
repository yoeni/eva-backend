import { TradeDAO } from "../../daos/Trade/TradeDAO";
import Service from "../../Service";
import { TradeService } from "../TradeService";
import { TradeType } from "../../daos/Trade/TradeDAO";
import { ShareDAO } from "../../daos/Share/ShareDAO";

class TradeServiceImpl extends Service implements TradeService {

    private tradeDAO: TradeDAO;
    private shareDAO: ShareDAO;
    private static instance: TradeService;

    constructor(tradeDAO: TradeDAO, shareDAO: ShareDAO) {
        super();
        this.tradeDAO = tradeDAO;
        this.shareDAO = shareDAO;
    }

    public static getInstance(tradeDAO: TradeDAO, shareDAO: ShareDAO): TradeService {
        if (!this.instance) {
            this.instance = new TradeServiceImpl(tradeDAO, shareDAO);
        }
        return this.instance;
    }

    public getPorfolioTrades = async (portfolioId: string) => {
        return await this.tradeDAO.getPorfolioTrades(portfolioId);
    }

    public getAllShares = async () => {
        return await this.shareDAO.getAllShares();
    }

    public getAllTrades = async () => {
        return await this.tradeDAO.getAllTrades();
    }

    public getShareTrades = async (id: string) => {
        return await this.tradeDAO.getShareTrades(id);
    }

    public makeTrade = async (portfolioId: string, shareId: string, tradeType: TradeType, quantity: number, tradePrice: number) => {
        return await this.tradeDAO.makeTrade(portfolioId, shareId, tradeType, quantity, tradePrice);
    }
}
export default TradeServiceImpl;
