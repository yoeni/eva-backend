import { Response } from "../../utils/ResponseUtil";
import { TradeType } from "../Trade/TradeDAO";

export interface PortfolioDAO {
    getUserPortfolios(id: string): Promise<Response>;

    createPortfolio(id: string): Promise<Response>;

    shareActionToPortfolio(id: string, shareId: string, quantity: number, tradeType: TradeType): Promise<Response>;

    deletePortfolio(id: string): Promise<Response>;
}