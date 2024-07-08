import { Response } from "../../../utils/ResponseUtil";
import SQLDAOImpl from "../../SQL/impl/SQLDAOImpl";
import { TradeDAO, TradeType } from "../TradeDAO";
import { Trade } from "../../../data_access/models/Trade";
import { Share } from "../../../data_access/models/Share";

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
                include: [{
                    model: Share
                }],
                order: [['tradeTime', 'DESC']],
            });
        }, 'Cant find portfolio trades!');
    }
    
    public getAllTrades = async (): Promise<Response> => {
        return await this.runQuery(async () => {
            return await Trade.findAll({
                include: [{
                    model: Share
                }]
            });

        }, 'Cant get rades!');
    }

    public getShareTrades = async (shareId: string): Promise<Response> => {
        return await this.runQuery(async () => {
            return await Trade.findAll({
                where: { shareId },
                order: [['tradeTime', 'DESC']],
            });
        }, 'Cant find share trades!');
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