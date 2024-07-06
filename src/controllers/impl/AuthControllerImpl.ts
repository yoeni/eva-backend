import { NextFunction, Request, Response } from "express";
import AuthDTO from "../../dtos/AuthDTO";
import { UserService } from "../../services/UserService";
import { AuthController} from "../AuthController";
import Controller from "../../Controller";
import { AuthService } from "../../services/AuthService";



class AuthControllerImpl extends Controller implements AuthController {
    private authDTO: AuthDTO
    private userService: UserService
    private authService: AuthService
    private static instance: AuthController;

    constructor(authDTO: AuthDTO, authService: AuthService, userService: UserService) {
        super();
        this.authDTO = authDTO
        this.authService = authService
        this.userService = userService
    }

    public static getInstance(authDTO: AuthDTO, authService: AuthService, userService: UserService): AuthController {
        if (!this.instance) {
            this.instance = new AuthControllerImpl(authDTO, authService, userService);
        }
        return this.instance;
    }

    public serverAuth = async (req: Request, res: Response, next: NextFunction): Promise<any> => {
        const response = await this.authService.serverAuth(req.header('x-auth-token'));
        if (response.isSuccessfullExecution) {
            this.successHttpResponse(res, response.code, response.message, response.result);
        } else {
            this.errorHttpResponse(res, response.code, response.message);
        }
    }

    public loginWithEmail = async (req: Request, res: Response, next: NextFunction): Promise<any> => {
        let response = await this.validateRequestBody(this.authDTO.loginWithEmail, req)
        if(!response.isSuccessfullExecution){
            return this.errorHttpResponse(res, response.code, response.message);
            
        }
        response = await this.userService.loginWithEmail(
            req.body.email,
            req.body.password
        )
        if(!response.isSuccessfullExecution){
            return this.errorHttpResponse(res, response.code, response.message);
        }
        const authToken = this.authService.generateAuthToken(response.result);
        return this.successHttpResponse(res, response.code, response.message, {'x-auth-token': authToken});
    }
}

export default AuthControllerImpl;
