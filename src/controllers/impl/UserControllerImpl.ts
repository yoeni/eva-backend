import { UserController } from "../UserController";
import { NextFunction, Request, Response } from 'express';
import UserDTO from "../../dtos/UserDTO";
import Controller from "../../Controller";
import { UserService } from "../../services/UserService";
import { AuthService } from "../../services/AuthService";


class UserControllerImpl extends Controller implements UserController {
    private userDTO: UserDTO;
    private userService: UserService;
    private authService: AuthService;
    private static instance: UserController;

    constructor(userDTO: UserDTO, userService: UserService, authService: AuthService) {
        super();
        this.userDTO = userDTO;
        this.userService = userService;
        this.authService = authService;
    }

    public static getInstance(userDTO: UserDTO, userService: UserService, authService: AuthService): UserController {
        if (!this.instance) {
            this.instance = new UserControllerImpl(userDTO, userService, authService);
        }
        return this.instance;
    }
    public getUserByEmail = async (req: Request, res: Response, next: NextFunction): Promise<any> => {
        let response = await this.validateRequestParams(this.userDTO.getUserByEmail, req);
        if(!response.isSuccessfullExecution){
            this.errorHttpResponse(res, response.code, response.message);
            return;
        }

        response = this.authService.serverAuth(req.header('x-auth-token'));
        if(!response.isSuccessfullExecution){
            this.errorHttpResponse(res, response.code, response.message);
            return;
        }

        response = await this.userService.getUserByEmail(
            req.params.email
        );
        if(!response.isSuccessfullExecution){
            this.errorHttpResponse(res, response.code, response.message);
            return;
        }

        this.successHttpResponse(res, response.code, response.message, response.result)
        return;
    };
    public getUserInfo = async (req: Request, res: Response, next: NextFunction): Promise<any> => {
        let response = await this.validateRequestParams(this.userDTO.getUserInfo, req);
        if(!response.isSuccessfullExecution){
            this.errorHttpResponse(res, response.code, response.message);
            return;
        }

        response = this.authService.serverAuth(req.header('x-auth-token'));
        if(!response.isSuccessfullExecution){
            this.errorHttpResponse(res, response.code, response.message);
            return;
        }

        response = await this.userService.getUserInfo(
            req.params.id
        );
        if(!response.isSuccessfullExecution){
            this.errorHttpResponse(res, response.code, response.message);
            return;
        }

        this.successHttpResponse(res, response.code, response.message, response.result)
        return;
    };

    public addUser = async (req: Request, res: Response, next: NextFunction): Promise<any> => {
        return await this.validateRequestBodyAndExecute(this.userDTO.addUser, req, res, this.userService.addUser(
            req.body.username,
            req.body.email,
            req.body.password,
        ));
    };

    public updatePassword = async (req: Request, res: Response, next: NextFunction): Promise<any> => {
        let response = this.authService.serverAuth(req.header('x-auth-token'));
        if(!response.isSuccessfullExecution){
            this.errorHttpResponse(res, response.code, response.message);
            return;
        }
        
        return await this.validateRequestBodyAndExecute(this.userDTO.updatePassword, req, res, this.userService.updatePassword(
            req.body.id,
            req.body.oldPassword,
            req.body.newPassword
        ));
            
    };

    public resetPassword = async (req: Request, res: Response, next: NextFunction): Promise<any> => {
        let response = this.authService.serverAuth(req.header('x-auth-token'));
        if(!response.isSuccessfullExecution){
            this.errorHttpResponse(res, response.code, response.message);
            return;
        }
        
        return await this.validateRequestBodyAndExecute(this.userDTO.resetPassword, req, res, this.userService.resetPassword(
            req.body.id,
            req.body.newPassword
        ));
    };

    public deleteUserById = async (req: Request, res: Response, next: NextFunction): Promise<any> => {
        let response = this.authService.serverAuth(req.header('x-auth-token'));
        if(!response.isSuccessfullExecution){
            this.errorHttpResponse(res, response.code, response.message);
            return;
        }
        
        return await this.validateRequestParamsAndExecute(this.userDTO.deleteUserById, req, res, this.userService.deleteUserById(
            req.params.id,
        ));
    };
}

export default UserControllerImpl;
