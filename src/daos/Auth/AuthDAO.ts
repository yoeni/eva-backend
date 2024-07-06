
import { User } from "../../models/User";
import { Response } from "../..//utils/ResponseUtil";

export interface AuthDAO {

    generateAuthToken(user: User): string;

    serverAuth(token: string): Response;

}
