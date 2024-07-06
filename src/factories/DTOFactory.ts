import AuthDTO from "../dtos/AuthDTO";
import PortfolioDTO from "../dtos/PortfolioDTO";
import TradeDTO from "../dtos/TradeDTO";
import UserDTO from "../dtos/UserDTO";

export abstract class DTOFactory {

    public static getAuthDTO = (): AuthDTO => {
        return AuthDTO.getInstance();
    }

    public static getUserDTO = (): UserDTO => {
        return UserDTO.getInstance();
    }

    public static getTradeDTO = (): TradeDTO => {
        return TradeDTO.getInstance();
    }

    public static getPortfolioDTO = (): PortfolioDTO => {
        return PortfolioDTO.getInstance();
    }

}
