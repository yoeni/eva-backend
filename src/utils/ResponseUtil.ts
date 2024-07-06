export interface Response {
    isSuccessfullExecution: boolean;
    code: number;
    message?: string;
    result?: any;
}


class ResponseUtil {


    constructor() {
    }


    public errorResponse = (message: string, code: number): Response => {
        return {
            isSuccessfullExecution: false,
            message: message,
            code: code
        }
    }

    public successResponse = (data?: any): Response => {
        return {
            isSuccessfullExecution: true,
            result: data,
            code: 200
        }
    }
}

export default ResponseUtil;

