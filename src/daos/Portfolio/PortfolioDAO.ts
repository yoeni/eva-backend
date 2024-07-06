import { Response } from "../../utils/ResponseUtil";

export interface PortfolioDAO {
    getUserPortfolios(id: string): Promise<Response>;

    createPortfolio(id: string): Promise<Response>;

    addShareToPortfolio(id: string, shareId: string, quantity: number): Promise<Response>;

    deletePortfolio(id: string): Promise<Response>;
}