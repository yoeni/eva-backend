import { Response } from "../utils/ResponseUtil";
import { TradeType } from "../daos/Trade/TradeDAO";

export interface PortfolioService {
    
    getUserPortfolios(id: string): Promise<Response>;
    
    shareActionToPortfolio(id: string, shareId: string, quantity: number, tradeType: TradeType): Promise<Response>;

    createPortfolio(id: string): Promise<Response>;

    deletePortfolio(id: string): Promise<Response>;
}