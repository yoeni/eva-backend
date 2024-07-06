import { Response } from "../../../utils/ResponseUtil";
import SQLDAOImpl from "../../SQL/impl/SQLDAOImpl";
import { TradeDAO, TradeType } from "../TradeDAO";
import { Trade } from "../../../data_access/models/Trade";

class TradeSQLDAOImpl extends SQLDAOImpl implements TradeDAO {
    private static instance: TradeDAO;

    constructor() {
        super();
    }

    public static getInstance(): TradeDAO {
        if (!this.instance) {
            this.instance = new TradeSQLDAOImpl();
        }
        return this.instance;
    }
    public getPorfolioTrades = async (portfolioId: string): Promise<Response> => {
        return await this.runQuery(async () => {
            return await Trade.findAll({
                where: { portfolioId },
            });
        }, 'Cant find portfolio trades!');
    }
    
    public getAllTrades = async (): Promise<Response> => {
        return await this.runQuery(async () => {
            return await Trade.findAll();

        }, 'Cant get rades!');
    }

    public makeTrade = async (portfolioId: string, shareId: string, tradeType: TradeType, quantity: number, tradePrice: number): Promise<Response> => {
        return await this.runQuery(async () => {
            const user = await Trade.create({
                portfolioId,
                shareId,
                tradeType,
                quantity,
                tradePrice
            });
            return user;
        }, 'Error making trade!');
    }
}
export default TradeSQLDAOImpl;