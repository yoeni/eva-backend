import { Response } from "../utils/ResponseUtil";

export interface UserService {

    loginWithUsername(username: string, password: string): Promise<Response>;

    loginWithEmail(email: string, password: string): Promise<Response>;

    getUserByEmail(email: string): Promise<Response>;
    
    getUserInfo(id: string): Promise<Response>;

    addUser(username: string, email: string, password: string): Promise<Response>;

    resetPassword(id: string, newPassword: string): Promise<Response>;

    updatePassword(id: string,oldPassword: string, newPassword: string): Promise<Response>;

    deleteUserById(id: string): Promise<Response>;

}
