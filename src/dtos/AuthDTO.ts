import DTO from "../DTO";

class AuthDTO extends DTO{


    private static instance: AuthDTO

    public static getInstance(): AuthDTO {
        if (!this.instance) {
            this.instance = new AuthDTO();
        }
        return this.instance;
    }

    public loginWithEmail = this.dto.object({
        email: this.dto.string().email().required(),
        password: this.dto.string().required()
    });

}
export default AuthDTO;
