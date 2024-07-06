import { PortfolioDAO } from "../../daos/Portfolio/PortfolioDAO";
import Service from "../../Service";
import { PortfolioService } from "../PortfolioService";

class PortfolioServiceImpl extends Service implements PortfolioService {

    private portfolioDAO: PortfolioDAO;
    private static instance: PortfolioService;

    constructor(portfolioDAO: PortfolioDAO) {
        super();
        this.portfolioDAO = portfolioDAO
    }

    public static getInstance(portfolioDAO: PortfolioDAO): PortfolioService {
        if (!this.instance) {
            this.instance = new PortfolioServiceImpl(portfolioDAO);
        }
        return this.instance;
    }

    public getUserPortfolios = async (id:string) => {
        return await this.portfolioDAO.getUserPortfolios(id);
    }

    public addShareToPortfolio = async (id: string, shareId: string, quantity: number) => {
        return await this.portfolioDAO.addShareToPortfolio(id, shareId, quantity);
    }

    public createPortfolio = async (id:string) => {
        return await this.portfolioDAO.createPortfolio(id);
    }

    public deletePortfolio = async (id:string) => {
        return await this.portfolioDAO.deletePortfolio(id);
    }
}
export default PortfolioServiceImpl;
