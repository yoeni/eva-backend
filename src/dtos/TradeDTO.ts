import DTO from "../DTO";

class TradeDTO extends DTO{

    constructor() {
        super();
    }

    private static instance: TradeDTO

    public static getInstance(): TradeDTO {
        if (!this.instance) {
            this.instance = new TradeDTO();
        }
        return this.instance;
    }

    public getAllTrades = this.dto.object({
    });
}
export default TradeDTO;