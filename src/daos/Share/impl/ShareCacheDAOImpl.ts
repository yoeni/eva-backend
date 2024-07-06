import { Response } from "../../../utils/ResponseUtil";
import { ShareDAO } from "../ShareDAO";
import { Share } from "../../../data_access/models/Share";
import CacheDAOImpl from "../../Cache/impl/CacheDAOImpl";

class ShareCacheDAOImpl extends CacheDAOImpl implements ShareDAO {
    private shareDAO: ShareDAO;
    private static instance: ShareDAO;

    constructor(shareDAO: ShareDAO) {
        super();
        this.shareDAO = shareDAO;
    }

    public static getInstance(shareDAO: ShareDAO): ShareDAO {
        if (!this.instance) {
            this.instance = new ShareCacheDAOImpl(shareDAO);
        }
        return this.instance;
    }
    
    public getAllShares = async (): Promise<Response> => {
        return await this.shareDAO.getAllShares();
    }
    
    public updateSharePrices = async (symbol: string, price: number): Promise<Response> => {
        return await this.shareDAO.updateSharePrices(symbol, price);
    }
}
export default ShareCacheDAOImpl;