import {Response} from "express";

class HTTPResponseUtil {

    private static instance: HTTPResponseUtil;

    constructor() {
    }

    public static getInstance(): HTTPResponseUtil {
        if (!this.instance) {
            this.instance = new HTTPResponseUtil();
        }
        return this.instance;
    }


    public successHttpResponse = (res: Response, code: number, message: string, result: any) => {
        res.status(code).send({ success: true, message, result });
    };

    public errorHttpResponse = (res: Response, code: number, message: string) => {
        res.status(code).send({ success: false, message });
    };
}

export default HTTPResponseUtil;

