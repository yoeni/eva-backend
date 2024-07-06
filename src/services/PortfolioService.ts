import { Response } from "../utils/ResponseUtil";
import { tradeType } from "../daos/Trade/TradeDAO";

export interface PortfolioService {
    
    getUserPortfolios(id: string): Promise<Response>;
    
    addShareToPortfolio(id: string, shareId: string, quantity: number): Promise<Response>;

    createPortfolio(id: string): Promise<Response>;

    deletePortfolio(id: string): Promise<Response>;
}