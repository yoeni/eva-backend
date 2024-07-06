import { UserDAO } from "../../daos/User/UserDAO";
import Service from "../../Service";
import { UserService } from "../UserService";

class UserServiceImpl extends Service implements UserService {

    private userDAO: UserDAO;
    private static instance: UserService;

    constructor(userDAO: UserDAO) {
        super();
        this.userDAO = userDAO
    }

    public static getInstance(userDAO: UserDAO): UserService {
        if (!this.instance) {
            this.instance = new UserServiceImpl(userDAO);
        }
        return this.instance;
    }

    public loginWithEmail = async (username: string, password: string) => {
        return await this.userDAO.loginWithEmail(username, password);
    }

    public getUserByEmail = async (id: string) => {
        return await this.userDAO.getUserByEmail(id);
    }
    
    public getUserInfo = async (id: string) => {
        return await this.userDAO.getUserInfo(id);
    }

    public addUser = async (username: string, email: string, password: string) => {
        return await this.userDAO.addUser(username, email, password);
    }

    /*public forgotPassword = async (email: string) => {
        let response = await this.authService.serverAuth(token);
        if(response.isSuccessfullExecution){
            response = await this.userDAO.getUserByEmail(email);
            if(response.isSuccessfullExecution){
                const authToken = this.authService.generateAuthToken(response.result);
                return await this.mailerService.sendForgotPasswordEmail(email, authToken)
            }
        }
        return response
    }*/


    public updatePassword = async (id: string, oldPassword: string, newPassword: string) => {
        return await this.userDAO.updatePassword(id, oldPassword, newPassword);
    }

    public resetPassword = async (id: string, newPassword: string) => {
        return await this.userDAO.resetPassword(id, newPassword);
    }

    public deleteUserById = async (id: string) => {
        return await this.userDAO.deleteUserById(id);
    }
}

export default UserServiceImpl;
