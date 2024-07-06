import { Response } from "../../utils/ResponseUtil";

export interface TradeDAO {
    
    getPorfolioTrades(portfolioId: string): Promise<Response>;
    
    getAllTrades(): Promise<Response>;

    makeTrade(portfolioId: string, shareId: string, tradeType: TradeType, quantity: number, tradePrice: number): Promise<Response>;
}
export enum TradeType {
    buy = 1,
    sell = 0
}