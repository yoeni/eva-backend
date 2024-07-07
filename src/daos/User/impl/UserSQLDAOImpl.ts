import { Response } from "../../../utils/ResponseUtil";
import SQLDAOImpl from "../../SQL/impl/SQLDAOImpl";
import { UserDAO } from '../UserDAO'
import { User } from '../../../data_access/models/User';
import Encryptor from '../../../utils/cryptor';
class UserSQLDAOImpl extends SQLDAOImpl implements UserDAO {

    private static instance: UserDAO;

    constructor() {
        super();
    }

    public static getInstance(): UserDAO {
        if (!this.instance) {
            this.instance = new UserSQLDAOImpl();
        }
        return this.instance;
    }

    public loginWithUsername = async (username: string, password: string): Promise<Response> => {
        return await this.runQuery(async () => {
            const user = await User.findOne({
                where: { username, password: Encryptor.encrypt(password) },
            });

            if (user) {
                return { 
                    id: user.id,
                    username: user.username,
                    email: user.email
                };
            }
            return null;
        }, 'Invalid username or Password!');
    }

    public loginWithEmail = async (email: string, password: string): Promise<Response> => {
        return await this.runQuery(async () => {
            const user = await User.findOne({
                where: { email, password: Encryptor.encrypt(password) },
            });
            if (user) {
                return { 
                    id: user.id,
                    username: user.username,
                    email: user.email
                };
            }
            return null;
        }, 'Invalid email or Password!');
    }

    public getUserByEmail = async (email: string): Promise<Response> => {
        return await this.runQuery(async () => {
            const user = await User.findOne({
                where: { email },
            });

            if (user) {
                return {
                    id: user.id,
                    username: user.username,
                    email: user.email,
                    created_at: user.createdAt,
                };
            }
            return null;
        }, 'Cant find user!');
    }
    public getUserInfo = async (id: string): Promise<Response> => {
        return await this.runQuery(async () => {
            const user = await User.findOne({
                where: { id },
            });

            if (user) {
                return {
                    id: user.id,
                    username: user.username,
                    email: user.email,
                    created_at: user.createdAt,
                };
            }
            return null;
        }, 'Cant find user!');
    }

    public addUser = async (username: string, email: string, password: string): Promise<Response> => {
        return await this.runQuery(async () => {
            const encryptedPassword = Encryptor.encrypt(password);
            const user = await User.create({
                username,
                email,
                password: encryptedPassword,
            });
            return user;
        }, 'Error adding user!');
    }

    public resetPassword = async (id: string, newPassword: string): Promise<Response> => {
        return await this.runQuery(async () => {
            const encryptedPassword = Encryptor.encrypt(newPassword);
            const [updated] = await User.update({ password: encryptedPassword }, { where: { id } });
            return updated ? { password_updated: true } : null;
        }, 'Error resetting password!');
    }

    public updatePassword = async (id: string, oldPassword: string, newPassword: string ): Promise<Response> => {
        return await this.runQuery(async () => {
            const user = await User.findByPk(id);

            if (user && Encryptor.decrypt(user.password) === oldPassword) {
                const encryptedPassword = Encryptor.encrypt(newPassword);
                const [updated] = await User.update({ password: encryptedPassword }, { where: { id } });
                return updated ? { password_updated: true } : null;
            }
            return null;
        }, 'Old password is incorrect!');
    }

    public deleteUserById = async (id: string): Promise<Response> => {
        return await this.runQuery(async () => {
            const deleted = await User.destroy({ where: { id } });
            return deleted ? { user_deleted: true } : null;
        }, 'Error deleting user');
    }

}
export default UserSQLDAOImpl;
