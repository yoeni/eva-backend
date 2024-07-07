import { AuthController } from "../controllers/AuthController";
import { ControllerFactory } from "../factories/ControllerFactory";



class AuthRoutes {
    private authController: AuthController;

    constructor() {
        this.authController = ControllerFactory.getAuthController();
    }

    public setRoutes(apiRouter: any) {
        apiRouter.post('/auth/username', (req, res, next) => this.authController.loginWithUsername(req, res, next));
        apiRouter.post('/auth/email', (req, res, next) => this.authController.loginWithEmail(req, res, next));
        apiRouter.get('/auth/verify', (req, res, next) => this.authController.serverAuth(req, res, next));
    }
}

export default new AuthRoutes();
