import DTO from "../DTO";

class PortfolioDTO extends DTO{

    constructor() {
        super();
    }

    private static instance: PortfolioDTO

    public static getInstance(): PortfolioDTO {
        if (!this.instance) {
            this.instance = new PortfolioDTO();
        }
        return this.instance;
    }

    public getUserPortfolios = this.dto.object({
        id: this.dto.string().required(),
    });

    public getPorfolioTrades = this.dto.object({
        id: this.dto.string().required(),
    });

    public makeTrade = this.dto.object({
        portfolioId: this.dto.string().required(),
        shareId: this.dto.string().required(),
        tradeType: this.dto.number().required(),
        quantity: this.dto.number().required(),
        tradePrice: this.dto.number().required(),
    });
    
    public createPortfolio = this.dto.object({
        id: this.dto.string().required(),
    });

    public deletePortfolio = this.dto.object({
        id: this.dto.string().required(),
    });
}
export default PortfolioDTO;