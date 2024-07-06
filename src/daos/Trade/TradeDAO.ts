import { Response } from "../../utils/ResponseUtil";

export interface TradeDAO {
    
    getPorfolioTrades(portfolioId: string): Promise<Response>;

    getAllTrades(): Promise<Response>;

    makeTrade(portfolioId: string, shareId: string, tradeType: tradeType, quantity: number, tradePrice: number): Promise<Response>;
}
export enum tradeType {
    buy = 0,
    sell = 1
}