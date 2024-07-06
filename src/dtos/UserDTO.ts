import DTO from "../DTO";

class UserDTO extends DTO{

    constructor() {
        super();
    }

    private static instance: UserDTO

    public static getInstance(): UserDTO {
        if (!this.instance) {
            this.instance = new UserDTO();
        }
        return this.instance;
    }

    public getUserByEmail = this.dto.object({
        email: this.dto.string().email().required()
    });
    
    public getUserInfo = this.dto.object({
        id: this.dto.string().required(),
    });

    public addUser = this.dto.object({
        username: this.dto.string().required(),
        email: this.dto.string().email().required(),
        password: this.dto.string().required()
    });

    public updatePassword = this.dto.object({
        id: this.dto.string().required(),
        oldPassword: this.dto.string().required(),
        newPassword: this.dto.string().required(),
    });

    public resetPassword = this.dto.object({
        id: this.dto.string().required(),
        newPassword: this.dto.string().required(),
    });

    public deleteUserById = this.dto.object({
        id: this.dto.string().required(),
    });


}

export default UserDTO;
