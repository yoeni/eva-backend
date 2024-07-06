import ResponseUtil, {Response} from "./utils/ResponseUtil";
import LogUtil from "./utils/LogUtil";
import {UtilFactory} from './factories/UtilFactory';

class DAO implements ResponseUtil, LogUtil {

    private responseUtil: ResponseUtil;
    private logUtil: LogUtil;

    constructor() {
        this.responseUtil = UtilFactory.getResponseUtil();
        this.logUtil = UtilFactory.getLogUtil();
    }

    log = (message: string): void => this.logUtil.log(message);


    errorResponse = (message: string, code: number): Response => this.responseUtil.errorResponse(message,code);


    successResponse = (data?: any): Response => this.responseUtil.successResponse(data);

}
export default DAO;
