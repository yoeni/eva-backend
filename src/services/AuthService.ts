import { User } from "../models/User";
import { Response } from "../utils/ResponseUtil";

export interface AuthService {

    generateAuthToken(user: User): string;

    serverAuth(token: string): Response;

}
