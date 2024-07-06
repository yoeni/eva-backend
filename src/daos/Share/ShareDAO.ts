import { Response } from "../../utils/ResponseUtil";

export interface ShareDAO {
    
    getAllShares(): Promise<Response>;
    
    updateSharePrices(symbol: string, price: number): Promise<Response>;
}