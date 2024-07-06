import HTTPResponseUtil from "../utils/HTTPResponseUtil";
import LogUtil from "../utils/LogUtil";
import ResponseUtil from "../utils/ResponseUtil";
import ValidationUtil from "../utils/ValidationUtil";

export abstract class UtilFactory {

    public static getLogUtil = (): LogUtil => {
        return LogUtil.getInstance();
    }

    public static getHTTPResponseUtil = (): HTTPResponseUtil => {
        return HTTPResponseUtil.getInstance();
    }

    public static getValidationUtil = (): ValidationUtil => {
        return ValidationUtil.getInstance();
    }

    public static getResponseUtil = (): ResponseUtil => {
        return ValidationUtil.getInstance();
    }
}
