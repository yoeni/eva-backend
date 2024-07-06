import { Response } from "../../../utils/ResponseUtil";
import { PortfolioDAO } from "../PortfolioDAO";
import CacheDAOImpl from "../../Cache/impl/CacheDAOImpl";
import { TradeType } from "../../Trade/TradeDAO";

class PortfolioCacheDAOImpl extends CacheDAOImpl implements PortfolioDAO {
    private portfolioDAO: PortfolioDAO;
    private static instance: PortfolioDAO;

    constructor(portfolioDAO: PortfolioDAO) {
        super();
        this.portfolioDAO = portfolioDAO;
    }

    public static getInstance(portfolioDAO: PortfolioDAO): PortfolioDAO {
        if (!this.instance) {
            this.instance = new PortfolioCacheDAOImpl(portfolioDAO);
        }
        return this.instance;
    }

    public getUserPortfolios = async (id: string): Promise<Response> => {
        return await this.portfolioDAO.getUserPortfolios(id);
    }

    public shareActionToPortfolio = async (id: string, shareId: string, quantity: number, tradeType: TradeType): Promise<Response> => {
        return await this.portfolioDAO.shareActionToPortfolio(id, shareId, quantity, tradeType);
    }

    public createPortfolio = async (id: string): Promise<Response> => {
        return await this.portfolioDAO.createPortfolio(id);
    }

    public deletePortfolio = async (id: string): Promise<Response> => {
        return await this.portfolioDAO.deletePortfolio(id);
    }
}
export default PortfolioCacheDAOImpl;