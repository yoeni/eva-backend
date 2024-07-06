import { Response } from "../../../utils/ResponseUtil";
import SQLDAOImpl from "../../SQL/impl/SQLDAOImpl";
import { ShareDAO } from "../ShareDAO";
import { Share } from "../../../data_access/models/Share";

class ShareSQLDAOImpl extends SQLDAOImpl implements ShareDAO {
    private static instance: ShareDAO;

    constructor() {
        super();
    }

    public static getInstance(): ShareDAO {
        if (!this.instance) {
            this.instance = new ShareSQLDAOImpl();
        }
        return this.instance;
    }
    
    public getAllShares = async (): Promise<Response> => {
        return await this.runQuery(async () => {
            return await Share.findAll();

        }, 'Cant get shares!');
    }
    
    public updateSharePrices = async (symbol: string, price: number): Promise<Response> => {
        return await this.runQuery(async () => {
            return await Share.update({ price }, { where: { symbol }, logging: false });
        }, 'Cant add share!');
    }
}
export default ShareSQLDAOImpl;