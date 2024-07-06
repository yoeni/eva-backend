import { Request, Response } from 'express';
import { ObjectSchema } from 'joi';
import ResponseUtil from "./ResponseUtil";



class ValidationUtil extends ResponseUtil{

    constructor() {
        super();
    }

    private static instance: ValidationUtil;

    public static getInstance(): ValidationUtil{
        if (!this.instance) {
            this.instance = new ValidationUtil();
        }
        return this.instance;
    }

    public validateRequestBody = async (
        schema: ObjectSchema,
        req: Request
    )  => {
        try {
            await schema.validateAsync(req.body);
            return this.successResponse()
        } catch (error) {
            return this.errorResponse('Invalid request body', 400);
        }
    };

    public validateRequestBodyAndExecute = async (
        schema: ObjectSchema,
        req: Request,
        res: Response,
        action:  Promise<any>
    ) => {
        let response = await this.validateRequestBody(schema,req)
        if(!response.isSuccessfullExecution){
            return this.errorHttpResponse(res, response.code, response.message);
        }
        response = await action;
        return this.successHttpResponse(res, response.code, response.message, response.result);
    };
    public validateRequestParams = async (
        schema: ObjectSchema,
        req: Request
    ) => {
        try {
            await schema.validateAsync(req.params);
            return this.successResponse()
        } catch (error) {
            return this.errorResponse('Invalid request params', 400);
        }
    };

    public validateRequestParamsAndExecute = async (
        schema: ObjectSchema,
        req: Request,
        res: Response,
        action:  Promise<any>
    )  => {
        let response = await this.validateRequestParams(schema,req)
        if(!response.isSuccessfullExecution){
            this.errorHttpResponse(res, response.code, response.message);
            return;
        }
        response = await action;
        if(!response.isSuccessfullExecution){
            this.errorHttpResponse(res, response.code, response.message);
            return;
        }
        this.successHttpResponse(res, response.code, response.message, response.result)
        return;
    };

    public successHttpResponse = (res: Response, code: number, message: string, result: any) => {
        res.status(code).send({ success: true, message, result });
    };

    public errorHttpResponse = (res: Response, code: number, message: string) => {
        res.status(code).send({ success: false, message });
    };

}
export default ValidationUtil
