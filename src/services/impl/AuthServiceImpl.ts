import jwt from 'jsonwebtoken';
import Service from "../../Service";
import ResponseUtil, { Response } from '../../utils/ResponseUtil';
import config from '../../../config'
import { AuthDAO } from '../../daos/Auth/AuthDAO';
import { AuthService } from '../AuthService';


class AuthServiceImpl extends Service implements AuthService {
    private client
    private static instance: AuthDAO;

    private constructor() {
        super();
        this.init();
    }

    public static getInstance(): AuthDAO {
        if (!this.instance) {
            this.instance = new AuthServiceImpl();
        }
        return this.instance;
    }

    private init = (): void => {
        this.client = jwt;
    }

    public generateAuthToken = (user: any): string => {
        return this.client.sign({ user: user }, config.JWT_PRIVATE_KEY);
    }

    private verifyToken = (token: string): Response => {
        const decoded = this.client.decode(token);
        if ((Number(decoded.iat + '000') + 30 * 60000) > Date.now()) {
            return this.successResponse(decoded.user);
        } else {
            return this.errorResponse('Token Expired', 400);
        }
    }

    public serverAuth = (token): Response => {
        if (!token)
            return this.errorResponse('Access Denied: No token provided!', 401);
        try {
            const response = this.verifyToken(token);
            if (response.isSuccessfullExecution) {
                return this.successResponse(response.result);
            }
            return this.errorResponse(response.message, response.code);
        } catch {
            return this.errorResponse('Invalid Token', 400);
        }
    };
}

export default AuthServiceImpl;
