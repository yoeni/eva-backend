import { ObjectSchema } from 'joi';
import {UtilFactory} from "./factories/UtilFactory";
import {Response, Request} from "express";
import ResponseUtil from "./utils/ResponseUtil";
import ValidationUtil from "./utils/ValidationUtil";
import HTTPResponseUtil from './utils/HTTPResponseUtil';
import LogUtil from './utils/LogUtil';

class Controller implements HTTPResponseUtil,ValidationUtil, LogUtil {


    private httpResponseUtil: HTTPResponseUtil;
    private validationUtil: ValidationUtil;
    private responseUtil: ResponseUtil;
    private logUtil: LogUtil;

    constructor() {
        this.httpResponseUtil = UtilFactory.getHTTPResponseUtil();
        this.validationUtil = UtilFactory.getValidationUtil();
        this.responseUtil = UtilFactory.getResponseUtil();
        this.logUtil = UtilFactory.getLogUtil();
    }
    

    successHttpResponse = (res: Response, code: number, message: string, result: any): void =>
        this.httpResponseUtil.successHttpResponse(res, code, message, result);

    errorHttpResponse = (res: Response, code: number, message: string): void =>
        this.httpResponseUtil.errorHttpResponse(res,code,message);

    validateRequestBody(schema: ObjectSchema, req: Request | any) {
        return this.validationUtil.validateRequestBody(schema,req);
    }

    validateRequestBodyAndExecute(schema: ObjectSchema, req: Request, res:Response, action: Promise<any>) {
        return this.validationUtil.validateRequestBodyAndExecute(schema,req,res,action);
    }

    validateRequestParams(schema: ObjectSchema, req: Request | any) {
        return this.validationUtil.validateRequestParams(schema,req);
    }

    validateRequestParamsAndExecute(schema: ObjectSchema, req: Request, res:Response, action: Promise<any>) {
        return this.validationUtil.validateRequestParamsAndExecute(schema,req,res,action);
    }

    errorResponse = (message: string, code: number) => this.responseUtil.errorResponse(message,code);


    successResponse = (data?: any) => this.responseUtil.successResponse(data);

    log = (data: any) => this.logUtil.log(data);



}
export default Controller;
