import { Response } from "../../utils/ResponseUtil";

export interface SQLDAO {

    runQuery(query: () => Promise<any>, errorMessage: string): Promise<Response>;

}
