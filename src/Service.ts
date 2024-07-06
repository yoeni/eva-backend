import ResponseUtil, {Response} from "./utils/ResponseUtil";
import {UtilFactory} from './factories/UtilFactory';

class Service implements ResponseUtil {

    private responseUtil: ResponseUtil;

    constructor() {
        this.responseUtil = UtilFactory.getResponseUtil();
    }


    errorResponse = (message: string, code: number): Response => this.responseUtil.errorResponse(message,code);


    successResponse = (data?: any): Response => this.responseUtil.successResponse(data);

}
export default Service;
