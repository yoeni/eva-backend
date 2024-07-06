import { Response } from "../../utils/ResponseUtil";

export interface CacheDAO {

    getCache(key: string): Promise<Response>;

    setCache(key: string, value): Promise<Response>;

    deleteCache(key: string): Promise<Response>;

}
