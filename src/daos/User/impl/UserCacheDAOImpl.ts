import { Response } from "../../../utils/ResponseUtil";
import { UserDAO } from "../UserDAO";
import CacheDAOImpl from "../../Cache/impl/CacheDAOImpl";

class UserCacheDAOImpl extends CacheDAOImpl implements UserDAO {
    private userDAO: UserDAO;
    private static instance: UserDAO;

    constructor(userDAO: UserDAO) {
        super();
        this.userDAO = userDAO;
    }

    public static getInstance(userDAO: UserDAO): UserDAO {
        if (!this.instance) {
            this.instance = new UserCacheDAOImpl(userDAO);
        }
        return this.instance;
    }

    public loginWithEmail = async (email: string, password: string): Promise<Response> => {
        return await this.userDAO.loginWithEmail(email, password);
    }

    public getUserByEmail = async (email: string): Promise<Response> => {
        return await this.userDAO.getUserByEmail(email);
    }

    public getUserInfo = async (id: string): Promise<Response> => {
        return await this.userDAO.getUserInfo(id);
    }

    public addUser = async (username: string, email: string, password: string): Promise<Response> => {
        return await this.userDAO.addUser(username, email, password);

    }

    public resetPassword = async (id: string, newPassword: string): Promise<Response> => {
        return await this.userDAO.resetPassword(id, newPassword);
    }

    public updatePassword = async (id: string, oldPassword: string, newPassword: string): Promise<Response> => {
        return await this.userDAO.updatePassword(id, oldPassword, newPassword);
    }

    public deleteUserById = async (id: string): Promise<Response> => {
        return await this.userDAO.deleteUserById(id);
    }
}

export default UserCacheDAOImpl;
