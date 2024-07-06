import { Response } from "../utils/ResponseUtil";
import { tradeType } from "../daos/Trade/TradeDAO";

export interface TradeService {
    
    getPorfolioTrades(portfolioId: string): Promise<Response>;

    getAllTrades(): Promise<Response>;
    
    makeTrade(portfolioId: string, shareId: string, tradeType: tradeType, quantity: number, tradePrice: number): Promise<Response>;
}