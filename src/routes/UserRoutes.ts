
import { UserController } from "../controllers/UserController";
import { ControllerFactory } from "../factories/ControllerFactory";

class UserRoutes {
    private userController: UserController

    constructor() {
        this.userController = ControllerFactory.getUserController();
    }

    public setRoutes(apiRouter: any) {
        
        apiRouter.get('/user/id/:id', (req, res, next) => this.userController.getUserInfo(req, res, next));
        apiRouter.get('/user/email/:email', (req, res, next) => this.userController.getUserByEmail(req, res, next));

        apiRouter.post('/user/signup', (req, res, next) => this.userController.addUser(req, res, next));
        
        apiRouter.put('/user/updatepassword', (req, res, next) => this.userController.updatePassword(req, res, next));
        apiRouter.put('/user/resetpassword', (req, res, next) => this.userController.resetPassword(req, res, next));

        apiRouter.delete('/user/:id', (req, res, next) => this.userController.deleteUserById(req, res, next));
    }
}

export default new UserRoutes();
