import { Response } from "../../../utils/ResponseUtil";
import SQLDAOImpl from "../../SQL/impl/SQLDAOImpl";
import { PortfolioDAO } from "../PortfolioDAO";
import { Portfolio } from "../../../data_access/models/Portfolio";
import { PortfolioShare } from "../../../data_access/models/PortfolioShare";
import { Share } from "../../../data_access/models/Share";

class PortfolioSQLDAOImpl extends SQLDAOImpl implements PortfolioDAO {
    private static instance: PortfolioDAO;

    constructor() {
        super();
    }

    public static getInstance(): PortfolioDAO {
        if (!this.instance) {
            this.instance = new PortfolioSQLDAOImpl();
        }
        return this.instance;
    }
    public getUserPortfolios = async (id: string): Promise<Response> => {
        return await this.runQuery(async () => {
            return await Portfolio.findAll({
                where: { userId: id },
                include: [{
                    model: PortfolioShare,
                    include: [Share]
                }],
            });
        }, 'Cant find portfolio');
    }

    public addShareToPortfolio = async (id: string, shareId: string, quantity: number): Promise<Response> => {
        return await this.runQuery(async () => {
            let portfolioShare = await PortfolioShare.findOne({
                where: {
                    portfolioId: id,
                    shareId: shareId
                }
            });

            if (portfolioShare) {
                portfolioShare.quantity += quantity;
                await portfolioShare.save();
            } else {
                await PortfolioShare.create({
                    portfolioId: id,
                    shareId: shareId,
                    quantity: 1
                });
            }
        }, 'Error add share to portfolio!');
    }

    public createPortfolio = async (id: string): Promise<Response> => {
        return await this.runQuery(async () => {
            return await Portfolio.create({
                userId: id
            });
        }, 'Error create portfolio!');
    }
    
    public deletePortfolio = async (id: string): Promise<Response> => {
        return await this.runQuery(async () => {
            const deleted = await Portfolio.destroy({ where: { id } });
            return deleted ? { portfolio_deleted: true } : null;
        }, 'Error deleting portfolio!');
    }
}

export default PortfolioSQLDAOImpl;