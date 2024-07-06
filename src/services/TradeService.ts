import { Response } from "../utils/ResponseUtil";
import { TradeType } from "../daos/Trade/TradeDAO";

export interface TradeService {
    
    getPorfolioTrades(portfolioId: string): Promise<Response>;

    getAllShares(): Promise<Response>;

    getAllTrades(): Promise<Response>;
    
    makeTrade(portfolioId: string, shareId: string, tradeType: TradeType, quantity: number, tradePrice: number): Promise<Response>;
}