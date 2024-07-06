
import {SQLDAO} from "../SQLDAO";
import DAO from '../../../DAO';

class SQLDAOImpl extends DAO implements SQLDAO {

    constructor() {
        super();
    }


    public runQuery = async (query: () => Promise<any>, errorMessage: string) => {
        try {
            const result = await query();
            if (result != false) 
                return this.successResponse(result);
            else
                return this.errorResponse(errorMessage, 500);
        } catch (err) {
            return this.errorResponse('An error occured on SQLDAO!: ' + err, 500);
        }
    }
}

export default SQLDAOImpl;
